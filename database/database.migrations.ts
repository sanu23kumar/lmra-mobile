import { SQLiteDatabase } from "expo-sqlite";
import { migrateExpensesTable } from "./tables/expenses/expenses.migrations";
import { migrateExpenseCategoriesTable } from "./tables/expenseCategories/expenseCategories.migrations";
import { migratePaymentMethodsTable } from "./tables/paymentMethods/paymentMethods.migrations";

export async function migrateDbIfNeeded(db: SQLiteDatabase) {
  const DATABASE_VERSION = 1;
  const { user_version: currentDbVersion } = await db.getFirstAsync<{
    user_version: number;
  }>("PRAGMA user_version");

  if (currentDbVersion >= DATABASE_VERSION) {
    return;
  }

  if (currentDbVersion === 0) {
    // Initial migration for all tables
    await migrateExpensesTable(db);
    await migrateExpenseCategoriesTable(db);
    await migratePaymentMethodsTable(db);
    await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
  }
}