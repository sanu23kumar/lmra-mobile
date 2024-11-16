import { ExpenseCategory } from "./expenseCategories.types";

export const InitialExpenseCategories: ExpenseCategory[] = [
  {
    created_at: new Date().toISOString(),
    id: 1,
    category_name: "Other",
    updated_at: new Date().toISOString(),
  },
];
