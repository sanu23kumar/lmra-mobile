import { useSQLiteContext } from "expo-sqlite";
import { PaymentMethod } from "./paymentMethods.types";

export function usePaymentMethodsQueries() {
  const db = useSQLiteContext();

  const addPaymentMethod = (method_name: string) =>
    db.runAsync(
      "INSERT INTO payment_methods (method_name, created_at, updated_at) VALUES (?, ?, ?)",
      [method_name, new Date().toISOString(), new Date().toISOString()]
    );

  const getAllPaymentMethods = () =>
    db.getAllAsync<PaymentMethod>("SELECT * FROM payment_methods");

  const updatePaymentMethod = async (id: number, method_name: string) =>
    db.runAsync(
      "UPDATE payment_methods SET method_name = ?, updated_at = ? WHERE id = ?",
      [method_name, new Date().toISOString(), id]
    );

  const deletePaymentMethod = async (id: number) =>
    db.runAsync("DELETE FROM payment_methods WHERE id = ?", [id]);

  return {
    addPaymentMethod,
    getAllPaymentMethods,
    updatePaymentMethod,
    deletePaymentMethod,
  };
}
