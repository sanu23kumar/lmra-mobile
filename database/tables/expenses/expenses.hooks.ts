import { useEffect } from "react";
import { useExpenseQueries } from "./expenses.queries";
import { useExpensesStore } from "./expenses.store";

export function useExpenses() {
  const {
    addExpense,
    getAllExpenses,
    updateExpense,
    deleteExpense,
    getCategoryExpenseTotals,
  } = useExpenseQueries();

  const {
    expenses,
    setExpenses,
    expenseCategoryTotals,
    setExpenseCategoryTotals,
  } = useExpensesStore();

  const totalExpense = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const fetchData = async () => {
    const [expenses, categoryTotals] = await Promise.all([
      getAllExpenses(),
      getCategoryExpenseTotals(),
    ]);
    setExpenses(expenses);
    setExpenseCategoryTotals(categoryTotals);
  };

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
    ).then(fetchData);

  const handleUpdateExpense = async (
    id: number,
    name: string,
    amount: number
  ) => updateExpense(id, name, amount).then(fetchData);

  const handleDeleteExpense = async (id: number) =>
    deleteExpense(id).then(fetchData);

  // Load expenses on mount
  useEffect(() => {
    fetchData();
  }, []);

  return {
    expenses,
    totalExpense,
    expenseCategoryTotals,
    handleAddExpense,
    handleUpdateExpense,
    handleDeleteExpense,
    getCategoryExpenseTotals,
  };
}
