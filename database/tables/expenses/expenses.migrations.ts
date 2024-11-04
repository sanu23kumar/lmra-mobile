import { SQLiteDatabase } from "expo-sqlite";

export async function migrateExpensesTable(db: SQLiteDatabase) {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS expenses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      amount INTEGER NOT NULL,
      date_of_expense DATETIME NOT NULL,
      created_at DATETIME NOT NULL,
      updated_at DATETIME NOT NULL
    );
  `);
}
