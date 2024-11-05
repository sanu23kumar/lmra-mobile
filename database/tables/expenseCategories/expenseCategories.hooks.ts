import { useEffect, useCallback } from "react";
import { create } from "zustand";
import { ExpenseCategory } from "./expenseCategories.types";
import { useExpenseCategoriesQueries } from "./expenseCategories.queries";

// Define the Zustand store within the hook
interface ExpenseCategoriesStore {
  expenseCategories: ExpenseCategory[];
  loading: boolean;
  error: string | null;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setExpenseCategories: (expenseCategories: ExpenseCategory[]) => void;
}

const useExpenseCategoriesStore = create<ExpenseCategoriesStore>((set) => ({
  expenseCategories: [],
  loading: true,
  error: null,
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setExpenseCategories: (expenseCategories) => set({ expenseCategories }),
}));

// Main useExpenseCategories hook
export function useExpenseCategories() {
  const {
    addExpenseCategory,
    getAllExpenseCategories,
    updateExpenseCategory,
    deleteExpenseCategory,
  } = useExpenseCategoriesQueries();

  // Zustand state and setters
  const {
    expenseCategories,
    loading,
    error,
    setLoading,
    setError,
    setExpenseCategories,
  } = useExpenseCategoriesStore();

  // Fetch all expense categories and set the state
  const fetchExpenseCategories = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getAllExpenseCategories();
      setExpenseCategories(data);
    } catch (err) {
      setError("Failed to fetch expense categories");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [getAllExpenseCategories, setLoading, setError, setExpenseCategories]);

  // Add a new expense category and refresh the list
  const handleAddExpenseCategory = async (category_name: string) => {
    try {
      await addExpenseCategory(category_name);
      await fetchExpenseCategories(); // Refresh expense categories after adding
    } catch (err) {
      setError("Failed to add expense category");
      console.error(err);
    }
  };

  // Update an expense category by ID and refresh the list
  const handleUpdateExpenseCategory = async (
    id: number,
    category_name: string
  ) => {
    try {
      await updateExpenseCategory(id, category_name);
      await fetchExpenseCategories(); // Refresh expense categories after updating
    } catch (err) {
      setError("Failed to update expense category");
      console.error(err);
    }
  };

  // Delete an expense category by ID and refresh the list
  const handleDeleteExpenseCategory = async (id: number) => {
    try {
      await deleteExpenseCategory(id);
      await fetchExpenseCategories(); // Refresh expense categories after deletion
    } catch (err) {
      setError("Failed to delete expense category");
      console.error(err);
    }
  };

  // Load expense categories on mount
  useEffect(() => {
    fetchExpenseCategories();
  }, []);

  return {
    expenseCategories,
    loading,
    error,
    fetchExpenseCategories,
    handleAddExpenseCategory,
    handleUpdateExpenseCategory,
    handleDeleteExpenseCategory,
  };
}
