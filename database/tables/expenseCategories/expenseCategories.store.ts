import { create } from "zustand";
import { ExpenseCategory } from "./expenseCategories.types";

interface ExpenseCategoriesStore {
  expenseCategories: ExpenseCategory[];
  setExpenseCategories: (expenseCategories: ExpenseCategory[]) => void;
}

export const useExpenseCategoriesStore = create<ExpenseCategoriesStore>(
  (set) => ({
    expenseCategories: [],
    setExpenseCategories: (expenseCategories) => set({ expenseCategories }),
  })
);
