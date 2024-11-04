import { useSQLiteContext } from "expo-sqlite";
import { Expense } from "./expenses.types";

export function useExpenseQueries() {
  const db = useSQLiteContext();

  // Add a new expense
  const addExpense = async (
    name: string,
    amount: number,
    date_of_expense: Date
  ) => {
    const start = performance.now();
    await db.runAsync(
      "INSERT INTO expenses (name, amount, date_of_expense, created_at, updated_at) VALUES (?, ?, ?, ?, ?)",
      [
        name,
        amount,
        date_of_expense.toISOString(),
        new Date().toISOString(),
        new Date().toISOString(),
      ]
    );
    const end = performance.now();
    console.log("Time taken to add the expense", end - start);
  };

  // Get all expenses
  const getAllExpenses = async (): Promise<Expense[]> => {
    return await db.getAllAsync<Expense>("SELECT * FROM expenses");
  };

  // Update an expense by ID
  const updateExpense = async (id: number, name: string, amount: number) => {
    await db.runAsync(
      "UPDATE expenses SET name = ?, amount = ?, updated_at = ? WHERE id = ?",
      [name, amount, new Date().toISOString(), id]
    );
  };

  // Delete an expense by ID
  const deleteExpense = async (id: number) => {
    await db.runAsync("DELETE FROM expenses WHERE id = ?", [id]);
  };

  return {
    addExpense,
    getAllExpenses,
    updateExpense,
    deleteExpense,
  };
}
