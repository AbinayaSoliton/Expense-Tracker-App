import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Expense {
  item: string;
  category: string;
  dateInUTC: Date;
  amountInRupees: number;
  isNeeded: string;
}

interface ExpenseSummary {
  expense: Expense[];
}

const initialState: ExpenseSummary = {
  expense: [
    {
      item: "Lunch",
      category: "Food",
      dateInUTC: new Date("2023-02-09"),
      amountInRupees: 120,
      isNeeded: "yes",
    },
    {
      item: "Petrol",
      category: "Travel",
      dateInUTC: new Date("2023-05-07"),
      amountInRupees: 500,
      isNeeded: "yes",
    },
    {
      item: "Chat",
      category: "Food",
      dateInUTC: new Date("2023-11-10"),
      amountInRupees: 250,
      isNeeded: "no",
    },
    {
      item: "Shirt",
      category: "Dress",
      dateInUTC: new Date("2023-11-23"),
      amountInRupees: 800,
      isNeeded: "yes",
    },
    {
      item: "Shirt",
      category: "Dress",
      dateInUTC: new Date("2023-05-12"),
      amountInRupees: 1200,
      isNeeded: "no",
    },
    {
      item: "Egg",
      category: "Grocery",
      dateInUTC: new Date("2023-11-12"),
      amountInRupees: 76,
      isNeeded: "yes",
    },
    {
      item: "Cab",
      category: "Travel",
      dateInUTC: new Date("2023-09-11"),
      amountInRupees: 460,
      isNeeded: "no",
    },
    {
      item: "Juice",
      category: "Food",
      dateInUTC: new Date("2023-12-11"),
      amountInRupees: 340,
      isNeeded: "partial",
    },
  ],
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.expense.push(action.payload);
    },
    removeExpense: (state, action: PayloadAction<string>) => {
      state.expense = state.expense.filter(
        (item: Expense) => item.item !== action.payload
      );
    },
  },
});

export const { addExpense, removeExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
