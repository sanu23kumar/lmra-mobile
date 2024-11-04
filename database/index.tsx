import React from "react";
import { SQLiteProvider } from "expo-sqlite";
import { migrateDbIfNeeded } from "./migrations";

interface DatabaseProviderProps {
  children: React.ReactNode;
}

export const DatabaseProvider: React.FC<DatabaseProviderProps> = ({
  children,
}) => {
  return (
    <SQLiteProvider databaseName="myDatabase.db" onInit={migrateDbIfNeeded}>
      {children}
    </SQLiteProvider>
  );
};
