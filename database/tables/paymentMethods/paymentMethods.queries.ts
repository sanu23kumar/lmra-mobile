import { useSQLiteContext } from "expo-sqlite";
import { PaymentMethod } from "./paymentMethods.types";

export function usePaymentMethodsQueries() {
  const db = useSQLiteContext();

  // Add a new payment method
  const addPaymentMethod = async (method_name: string) => {
    await db.runAsync(
      "INSERT INTO payment_methods (method_name, created_at, updated_at) VALUES (?, ?, ?)",
      [method_name, new Date().toISOString(), new Date().toISOString()]
    );
  };

  // Get all payment methods
  const getAllPaymentMethods = async (): Promise<PaymentMethod[]> => {
    return await db.getAllAsync<PaymentMethod>("SELECT * FROM payment_methods");
  };

  // Update a payment method by ID
  const updatePaymentMethod = async (id: number, method_name: string) => {
    await db.runAsync(
      "UPDATE payment_methods SET method_name = ?, updated_at = ? WHERE id = ?",
      [method_name, new Date().toISOString(), id]
    );
  };

  // Delete a payment method by ID
  const deletePaymentMethod = async (id: number) => {
    await db.runAsync("DELETE FROM payment_methods WHERE id = ?", [id]);
  };

  return {
    addPaymentMethod,
    getAllPaymentMethods,
    updatePaymentMethod,
    deletePaymentMethod,
  };
}
