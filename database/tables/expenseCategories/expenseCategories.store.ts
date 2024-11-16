import { create } from "zustand";
import { ExpenseCategory } from "./expenseCategories.types";
import { InitialExpenseCategories } from "./expenseCategories.values";

interface ExpenseCategoriesStore {
  expenseCategories: ExpenseCategory[];
  setExpenseCategories: (expenseCategories: ExpenseCategory[]) => void;
  selectedCategory?: ExpenseCategory;
  setSelectedCategory: (paymentMethod: ExpenseCategory) => void;
}

export const useExpenseCategoriesStore = create<ExpenseCategoriesStore>(
  (set) => ({
    expenseCategories: InitialExpenseCategories,
    setExpenseCategories: (expenseCategories) => set({ expenseCategories }),
    setSelectedCategory: (selectedCategory) => set({ selectedCategory }),
  })
);
