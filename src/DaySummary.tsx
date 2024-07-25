import "./DaySummary.css";
import { categoryList } from "./data.js";
import CategorySummaryTile from "./CategorySummary";
import React from "react";
import { Expense } from "./expenseInterface";

const DaySummaryHeaderText = "Day Summary";

interface DaySummaryProps {
    expenseSummary:Expense[]
}

function getExpense() {
  fetch("http://localhost:3000").then((response) => {
    console.log("response from getexpense localhost", response);
    return response.text();
  });
}
const DaySummary: React.FC<DaySummaryProps> = ({ expenseSummary }) => {
  // }
  // export default function DaySummary({expenseSummary}) {
  const dbExpense = getExpense();
  console.log(dbExpense);
  return (
    <section className="day-summary-cont">
      <section className="expense-summary-title-bar">
        {DaySummaryHeaderText}
      </section>
      <section className="expense-summary-tiles">
        <CategorySummaryTile
          category={categoryList[0]}
          expenseSummary={expenseSummary}
        />
        <CategorySummaryTile
          category={categoryList[1]}
          expenseSummary={expenseSummary}
        />
        <CategorySummaryTile
          category={categoryList[2]}
          expenseSummary={expenseSummary}
        />
        <CategorySummaryTile
          category={categoryList[3]}
          expenseSummary={expenseSummary}
        />
      </section>
    </section>
  );
};

export default DaySummary;
