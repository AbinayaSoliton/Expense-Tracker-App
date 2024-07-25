export interface Expense {
  item: string;
  category: string;
  dateInUTC: Date;
  amountInRupees: number;
  isNeeded: string;
}

export interface ExpenseSummary {
  expense: Expense[];
}

export interface ExpenseFieldName {
  labelName: string;
  id: string;
  fieldType: string;
  fieldMin?: string;
  fieldMax?: string;
  fieldValue?: string;
}

export interface ExpenseFieldNames {
  expenseFieldNames: ExpenseFieldName[];
}
