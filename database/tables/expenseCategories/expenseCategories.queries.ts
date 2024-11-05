import { useSQLiteContext } from "expo-sqlite";
import { ExpenseCategory } from "./expenseCategories.types";

export function useExpenseCategoriesQueries() {
  const db = useSQLiteContext();

  // Add a new expense category
  const addExpenseCategory = async (category_name: string) => {
    await db.runAsync(
      "INSERT INTO expense_categories (category_name, created_at, updated_at) VALUES (?, ?, ?)",
      [category_name, new Date().toISOString(), new Date().toISOString()]
    );
  };

  // Get all expense categories
  const getAllExpenseCategories = async (): Promise<ExpenseCategory[]> => {
    return await db.getAllAsync<ExpenseCategory>(
      "SELECT * FROM expense_categories"
    );
  };

  // Update an expense category by ID
  const updateExpenseCategory = async (id: number, category_name: string) => {
    await db.runAsync(
      "UPDATE expense_categories SET category_name = ?, updated_at = ? WHERE id = ?",
      [category_name, new Date().toISOString(), id]
    );
  };

  // Delete an expense category by ID
  const deleteExpenseCategory = async (id: number) => {
    await db.runAsync("DELETE FROM expense_categories WHERE id = ?", [id]);
  };

  return {
    addExpenseCategory,
    getAllExpenseCategories,
    updateExpenseCategory,
    deleteExpenseCategory,
  };
}
