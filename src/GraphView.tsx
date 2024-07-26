import React from "react";
import GraphD3 from "./GraphD3";
import { UseSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";
import { useSelector } from "react-redux";
import { ExpenseSummary, Expense } from "./expenseInterface";

interface CategoryTotals {
    [category: string]: number;
};

const GraphView: React.FC = () => {

    const expense = useSelector((state: RootState) => state.expense.expense);
    // const dispatch = useDispatch<AppDispatch>();
    //  const filteredCategoryData = expenseSummary.filter((expense: Expense) =>         
    //     expense.category === category
    //  );
    const dispatch = useDispatch<AppDispatch>();

    const filteredCategoryData = expense.filter((expense: Expense) =>         
        expense.category === 'Food'
     );
     console.log(filteredCategoryData);

     function categorizeAndTotal(expense: Expense[]) {
        const totals: CategoryTotals = expense.reduce((acc:CategoryTotals,exp ) => {
            console.log(exp.category);
            if (!acc[exp.category]) {
                acc[exp.category] = 0;
            }
            acc[exp.category] += exp.amountInRupees;
            return acc;
        }, {});
    
        return Object.entries(totals).map(([category, total]) => ({
            label: category,
            value: total
        }));
    }
    
    const data = categorizeAndTotal(expense);
    console.log(data);
     
    return (
        <div className="graph-cont">
            <div>
                Expense Trend Plot
                <GraphD3 data={data}/>
            </div>
        </div>
    )
}

export default GraphView;