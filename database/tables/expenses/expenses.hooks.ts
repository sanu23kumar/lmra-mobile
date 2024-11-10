import { useEffect } from "react";
import { useExpenseQueries } from "./expenses.queries";
import { useExpensesStore } from "./expenses.store";

export function useExpenses() {
  const { addExpense, getAllExpenses, updateExpense, deleteExpense } =
    useExpenseQueries();

  const { expenses, setExpenses } = useExpensesStore();

  const totalExpense = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const fetchExpenses = () =>
    getAllExpenses().then((data) => setExpenses(data));

  const handleAddExpense = async (
    name: string,
    amount: number,
    date_of_expense: Date,
    payment_method_id: number,
    expense_category_id: number
  ) =>
    addExpense(
      name,
      amount,
      date_of_expense,
      payment_method_id,
      expense_category_id
    ).then(fetchExpenses);

  const handleUpdateExpense = async (
    id: number,
    name: string,
    amount: number
  ) => updateExpense(id, name, amount).then(fetchExpenses);

  const handleDeleteExpense = async (id: number) =>
    deleteExpense(id).then(fetchExpenses);

  // Load expenses on mount
  useEffect(() => {
    fetchExpenses();
  }, []);

  return {
    expenses,
    totalExpense,
    fetchExpenses,
    handleAddExpense,
    handleUpdateExpense,
    handleDeleteExpense,
  };
}
