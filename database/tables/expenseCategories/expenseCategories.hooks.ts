import { useEffect } from "react";
import { useExpenseCategoriesQueries } from "./expenseCategories.queries";
import { useExpenseCategoriesStore } from "./expenseCategories.store";

export function useExpenseCategories() {
  const {
    addExpenseCategory,
    getAllExpenseCategories,
    updateExpenseCategory,
    deleteExpenseCategory,
  } = useExpenseCategoriesQueries();

  const {
    expenseCategories,
    setExpenseCategories,
    selectedCategory,
    setSelectedCategory,
  } = useExpenseCategoriesStore();

  const fetchExpenseCategories = () =>
    getAllExpenseCategories().then((data) => setExpenseCategories(data));

  const handleAddExpenseCategory = (category_name: string) =>
    addExpenseCategory(category_name).then(fetchExpenseCategories);

  const handleUpdateExpenseCategory = (id: number, category_name: string) =>
    updateExpenseCategory(id, category_name).then(fetchExpenseCategories);

  const handleDeleteExpenseCategory = (id: number) =>
    deleteExpenseCategory(id).then(fetchExpenseCategories);

  useEffect(() => {
    fetchExpenseCategories();
  }, []);

  return {
    expenseCategories,
    selectedCategory: selectedCategory ?? expenseCategories[0],
    setSelectedCategory,
    fetchExpenseCategories,
    handleAddExpenseCategory,
    handleUpdateExpenseCategory,
    handleDeleteExpenseCategory,
  };
}
