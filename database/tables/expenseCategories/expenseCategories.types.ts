export interface ExpenseCategory {
  id: number;
  category_name: string;
  created_at: string;
  updated_at: string;
}

export interface ExpenseCategoryTotals {
  category_id: number;
  category_name: string;
  total: number;
}
