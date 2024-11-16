import React from "react";
import { SQLiteProvider } from "expo-sqlite";
import { migrateDbIfNeeded } from "./database.migrations";

interface DatabaseProviderProps {
  children: React.ReactNode;
}

export const DatabaseProvider: React.FC<DatabaseProviderProps> = ({
  children,
}) => {
  return (
    <SQLiteProvider databaseName="myDatabase2.db" onInit={migrateDbIfNeeded}>
      {children}
    </SQLiteProvider>
  );
};
