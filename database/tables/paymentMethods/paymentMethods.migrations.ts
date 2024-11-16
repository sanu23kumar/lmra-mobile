import { SQLiteDatabase } from "expo-sqlite";

export async function migratePaymentMethodsTable(db: SQLiteDatabase) {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS payment_methods (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      method_name TEXT NOT NULL,
      created_at DATETIME NOT NULL,
      updated_at DATETIME NOT NULL
    );
  `);
  await db.execAsync(`
    CREATE INDEX IF NOT EXISTS idx_method_name ON payment_methods (method_name);
  `);
}
