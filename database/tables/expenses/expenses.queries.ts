import { useSQLiteContext } from "expo-sqlite";
import { Expense } from "./expenses.types";
import { ExpenseCategoryTotals } from "../expenseCategories/expenseCategories.types";

export function useExpenseQueries() {
  const db = useSQLiteContext();

  // Add a new expense
  const addExpense = async (
    name: string,
    amount: number,
    date_of_expense: Date,
    payment_method_id: number, // New parameter
    expense_category_id: number // New parameter
  ) => {
    const start = performance.now();
    await db.runAsync(
      "INSERT INTO expenses (name, amount, date_of_expense, payment_method_id, expense_category_id, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        name,
        amount,
        date_of_expense.toISOString(),
        payment_method_id,
        expense_category_id,
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

  const getCategoryExpenseTotals = async (): Promise<
    ExpenseCategoryTotals[]
  > => {
    return await db.getAllAsync<{
      category_id: number;
      category_name: string;
      total: number;
    }>(
      `
      SELECT 
        c.id AS category_id, 
        c.category_name, 
        COALESCE(SUM(e.amount), 0) AS total
      FROM expense_categories c
      LEFT JOIN expenses e ON c.id = e.expense_category_id
      GROUP BY c.id, c.category_name
      ORDER BY total DESC
      `
    );
  };

  return {
    addExpense,
    getAllExpenses,
    updateExpense,
    deleteExpense,
    getCategoryExpenseTotals,
  };
}
