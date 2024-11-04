import { useEffect, useCallback } from "react";
import { create } from "zustand";
import { Expense } from "./expenses.types";
import { useExpenseQueries } from "./useExpenseQueries";

// Define the Zustand store within the hook
interface ExpensesStore {
  expenses: Expense[];
  loading: boolean;
  error: string | null;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setExpenses: (expenses: Expense[]) => void;
}

const useExpensesStore = create<ExpensesStore>((set) => ({
  expenses: [],
  loading: true,
  error: null,
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setExpenses: (expenses) => set({ expenses }),
}));

// Main useExpense hook
export function useExpenses() {
  const { addExpense, getAllExpenses, updateExpense, deleteExpense } =
    useExpenseQueries();

  // Zustand state and setters
  const { expenses, loading, error, setLoading, setError, setExpenses } =
    useExpensesStore();

  const totalExpense = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  // Fetch all expenses and set the state
  const fetchExpenses = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllExpenses();
      setExpenses(data);
    } catch (err) {
      setError("Failed to fetch expenses");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [getAllExpenses, setLoading, setError, setExpenses]);

  // Add a new expense and refresh the list
  const handleAddExpense = async (
    name: string,
    amount: number,
    date_of_expense: Date
  ) => {
    try {
      const start = performance.now();
      await addExpense(name, amount, date_of_expense);
      await fetchExpenses(); // Refresh expenses after adding
      const end = performance.now();
      console.log("Time taken to add the expense", end - start);
    } catch (err) {
      setError("Failed to add expense");
      console.error(err);
    }
  };

  // Update an expense by ID and refresh the list
  const handleUpdateExpense = async (
    id: number,
    name: string,
    amount: number
  ) => {
    try {
      await updateExpense(id, name, amount);
      await fetchExpenses(); // Refresh expenses after updating
    } catch (err) {
      setError("Failed to update expense");
      console.error(err);
    }
  };

  // Delete an expense by ID and refresh the list
  const handleDeleteExpense = async (id: number) => {
    try {
      const start = performance.now();

      await deleteExpense(id);
      await fetchExpenses(); // Refresh expenses after deletion
      const end = performance.now();
      console.log("Time taken to add the expense", end - start);
    } catch (err) {
      setError("Failed to delete expense");
      console.error(err);
    }
  };

  // Load expenses on mount
  useEffect(() => {
    fetchExpenses();
  }, []);

  return {
    expenses,
    loading,
    error,
    fetchExpenses,
    handleAddExpense,
    handleUpdateExpense,
    handleDeleteExpense,
    totalExpense,
  };
}
