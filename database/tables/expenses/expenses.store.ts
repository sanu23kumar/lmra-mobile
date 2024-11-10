import { create } from "zustand";
import { Expense } from "./expenses.types";

interface ExpensesStore {
  expenses: Expense[];
  setExpenses: (expenses: Expense[]) => void;
}

export const useExpensesStore = create<ExpensesStore>((set) => ({
  expenses: [],
  setExpenses: (expenses) => set({ expenses }),
}));
