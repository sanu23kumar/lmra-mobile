import { SQLiteDatabase } from "expo-sqlite";

export async function migrateExpensesTable(db: SQLiteDatabase) {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS expenses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      amount INTEGER NOT NULL,
      date_of_expense DATETIME NOT NULL,
      payment_method_id INTEGER,
      expense_category_id INTEGER,
      created_at DATETIME NOT NULL,
      updated_at DATETIME NOT NULL,
      FOREIGN KEY (payment_method_id) REFERENCES payment_methods (id),
      FOREIGN KEY (expense_category_id) REFERENCES expense_categories (id)
    );
  `);
  await db.execAsync(`
    CREATE INDEX IF NOT EXISTS idx_expense_category_id ON expenses (expense_category_id);
  `);

  await db.execAsync(`
    CREATE INDEX IF NOT EXISTS idx_payment_method_id ON expenses (payment_method_id);
  `);

  await db.execAsync(`
    CREATE INDEX IF NOT EXISTS idx_date_of_expense ON expenses (date_of_expense);
  `);
}
