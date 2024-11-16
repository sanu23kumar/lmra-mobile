import FinanceSection from "@/components/finances/FinanceSection";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useExpenses } from "@/database/tables/expenses/expenses.hooks";
import { router } from "expo-router";
import { StyleSheet, ScrollView, Pressable, View } from "react-native";

export default function FinancesScreen() {
  const { totalExpense, expenseCategoryTotals } = useExpenses();

  // const savingsCategories = ["Salary 30,000", "Freelance 10,000"];
  // const emisCategories = [
  //   "Eating Out 30,000",
  //   "Groceries 10,000",
  //   "Home 8,000",
  // ];
  // const incomeCategories = [
  //   "Eating Out 30,000",
  //   "Groceries 10,000",
  //   "Home 8,000",
  // ];
  // const creditCardPaymentsCategories = [
  //   "Eating Out 30,000",
  //   "Groceries 10,000",
  //   "Home 8,000",
  // ];
  return (
    <ThemedView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Expenses section */}
        <FinanceSection
          title={"Expenses"}
          total={totalExpense}
          categories={expenseCategoryTotals}
          onPress={() => router.navigate("/expenses")}
        />
        {/* <FinanceSection
          title={"Savings"}
          total="80,000"
          categories={savingsCategories}
          onPress={() => router.navigate("/expenses")}
        />
        <FinanceSection
          title={"EMIs"}
          total="32,000"
          categories={emisCategories}
          onPress={() => router.navigate("/expenses")}
        />
        <FinanceSection
          title={"Income"}
          total="2,00,000"
          categories={incomeCategories}
          onPress={() => router.navigate("/expenses")}
        />
        <FinanceSection
          title={"Credit Card Payments"}
          total="1,00,000"
          categories={creditCardPaymentsCategories}
          onPress={() => router.navigate("/expenses")}
        /> */}
      </ScrollView>
      <View style={styles.monthContainer}>
        <Pressable style={styles.monthButton}>
          <ThemedText colorScheme="primary">September</ThemedText>
        </Pressable>
        <ThemedText type="subtitle" colorScheme="primary">
          October
        </ThemedText>
        <Pressable style={styles.monthButton}>
          <ThemedText colorScheme="primary">November</ThemedText>
        </Pressable>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  monthButton: {
    opacity: 0.6,
  },
  monthContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
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
});
