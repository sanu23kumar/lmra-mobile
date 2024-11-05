import { useEffect, useCallback } from "react";
import { create } from "zustand";
import { PaymentMethod } from "./paymentMethods.types";
import { usePaymentMethodsQueries } from "./paymentMethods.queries";

// Define the Zustand store within the hook
interface PaymentMethodsStore {
  paymentMethods: PaymentMethod[];
  loading: boolean;
  error: string | null;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setPaymentMethods: (paymentMethods: PaymentMethod[]) => void;
}

const usePaymentMethodsStore = create<PaymentMethodsStore>((set) => ({
  paymentMethods: [],
  loading: true,
  error: null,
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setPaymentMethods: (paymentMethods) => set({ paymentMethods }),
}));

// Main usePaymentMethods hook
export function usePaymentMethods() {
  const {
    addPaymentMethod,
    getAllPaymentMethods,
    updatePaymentMethod,
    deletePaymentMethod,
  } = usePaymentMethodsQueries();

  // Zustand state and setters
  const {
    paymentMethods,
    loading,
    error,
    setLoading,
    setError,
    setPaymentMethods,
  } = usePaymentMethodsStore();

  // Fetch all payment methods and set the state
  const fetchPaymentMethods = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllPaymentMethods();
      setPaymentMethods(data);
    } catch (err) {
      setError("Failed to fetch payment methods");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [getAllPaymentMethods, setLoading, setError, setPaymentMethods]);

  // Add a new payment method and refresh the list
  const handleAddPaymentMethod = async (method_name: string) => {
    try {
      await addPaymentMethod(method_name);
      await fetchPaymentMethods(); // Refresh payment methods after adding
    } catch (err) {
      setError("Failed to add payment method");
      console.error(err);
    }
  };

  // Update a payment method by ID and refresh the list
  const handleUpdatePaymentMethod = async (id: number, method_name: string) => {
    try {
      await updatePaymentMethod(id, method_name);
      await fetchPaymentMethods(); // Refresh payment methods after updating
    } catch (err) {
      setError("Failed to update payment method");
      console.error(err);
    }
  };

  // Delete a payment method by ID and refresh the list
  const handleDeletePaymentMethod = async (id: number) => {
    try {
      await deletePaymentMethod(id);
      await fetchPaymentMethods(); // Refresh payment methods after deletion
    } catch (err) {
      setError("Failed to delete payment method");
      console.error(err);
    }
  };

  // Load payment methods on mount
  useEffect(() => {
    fetchPaymentMethods();
  }, []);

  return {
    paymentMethods,
    loading,
    error,
    fetchPaymentMethods,
    handleAddPaymentMethod,
    handleUpdatePaymentMethod,
    handleDeletePaymentMethod,
  };
}
