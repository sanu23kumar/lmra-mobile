import { create } from "zustand";
import { Expense } from "./expenses.types";
import {
  ExpenseCategory,
  ExpenseCategoryTotals,
} from "../expenseCategories/expenseCategories.types";

interface ExpensesStore {
  expenses: Expense[];
  setExpenses: (expenses: Expense[]) => void;
  expenseCategoryTotals: ExpenseCategoryTotals[];
  setExpenseCategoryTotals: (
    expenseCategories: ExpenseCategoryTotals[]
  ) => void;
}

export const useExpensesStore = create<ExpensesStore>((set) => ({
  expenses: [],
  setExpenses: (expenses) => set({ expenses }),
  expenseCategoryTotals: [],
  setExpenseCategoryTotals: (expenseCategoryTotals) =>
    set({ expenseCategoryTotals }),
}));
