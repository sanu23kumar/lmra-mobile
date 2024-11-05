export interface Expense {
  id: number;
  name: string;
  amount: number;
  date_of_expense: string;
  payment_method_id: number;
  expense_category_id: number;
  created_at: string;
  updated_at: string;
}
