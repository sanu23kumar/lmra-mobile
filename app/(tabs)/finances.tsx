import FinanceCategories from "@/components/FinanceCategories";
import FinanceSection from "@/components/FinanceSection";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, ScrollView } from "react-native";

export default function FinancesScreen() {
  const expenseCategories = [
    "Eating Out 30,000",
    "Groceries 10,000",
    "Home 8,000",
  ];
  const savingsCategories = ["Salary 30,000", "Freelance 10,000"];
  const emisCategories = [
    "Eating Out 30,000",
    "Groceries 10,000",
    "Home 8,000",
  ];
  const incomeCategories = [
    "Eating Out 30,000",
    "Groceries 10,000",
    "Home 8,000",
  ];
  const creditCardPaymentsCategories = [
    "Eating Out 30,000",
    "Groceries 10,000",
    "Home 8,000",
  ];
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="default" style={styles.text}>
        October
      </ThemedText>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}
      >
        {/* Expenses section */}
        <FinanceSection
          title={"Expenses"}
          total="1,39,000"
          categories={expenseCategories}
        />
        <FinanceSection
          title={"Savings"}
          total="80,000"
          categories={savingsCategories}
        />
        <FinanceSection
          title={"EMIs"}
          total="32,000"
          categories={emisCategories}
        />
        <FinanceSection
          title={"Income"}
          total="2,00,000"
          categories={incomeCategories}
        />
        <FinanceSection
          title={"Credit Card Payments"}
          total="1,00,000"
          categories={creditCardPaymentsCategories}
        />
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    flexDirection: "column",
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  scrollViewContainer: {
    gap: 16,
  },
  text: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    color: "#CD853F",
  },
});
