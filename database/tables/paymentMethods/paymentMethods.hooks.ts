import { useEffect } from "react";
import { usePaymentMethodsQueries } from "./paymentMethods.queries";
import { usePaymentMethodsStore } from "./paymentMethods.store";

export function usePaymentMethods() {
  const {
    addPaymentMethod,
    getAllPaymentMethods,
    updatePaymentMethod,
    deletePaymentMethod,
  } = usePaymentMethodsQueries();

  const {
    paymentMethods,
    setPaymentMethods,
    selectedMethod,
    setSelectePaymentMethod,
  } = usePaymentMethodsStore();

  const fetchPaymentMethods = () =>
    getAllPaymentMethods().then((data) => setPaymentMethods(data));

  const handleAddPaymentMethod = async (method_name: string) =>
    addPaymentMethod(method_name).then(fetchPaymentMethods); // Refresh payment methods after adding

  const handleUpdatePaymentMethod = async (id: number, method_name: string) =>
    updatePaymentMethod(id, method_name).then(fetchPaymentMethods);

  const handleDeletePaymentMethod = async (id: number) =>
    deletePaymentMethod(id).then(fetchPaymentMethods);

  useEffect(() => {
    fetchPaymentMethods();
  }, []);

  return {
    paymentMethods,
    selectedMethod: selectedMethod ?? paymentMethods[0],
    setSelectePaymentMethod,
    fetchPaymentMethods,
    handleAddPaymentMethod,
    handleUpdatePaymentMethod,
    handleDeletePaymentMethod,
  };
}
