import "./DaySummary.css";
import { categoryList } from "./data.js";
import CategorySummaryTile from "./CategorySummary.js";

const DaySummaryHeaderText = 'Day Summary';

export default function DaySummary({expenseSummary}) {
    return (
        <section className='day-summary-cont'>
            <div>
                <section className="expense-summary-title-bar">
                    {DaySummaryHeaderText}
                </section>               
                <section className="expense-summary-tiles">
                    <CategorySummaryTile
                        category = {categoryList[0]}
                        expenseSummary = {expenseSummary}
                    />
                    <CategorySummaryTile
                        category = {categoryList[1]}
                        expenseSummary = {expenseSummary}
                    />
                    <CategorySummaryTile
                        category = {categoryList[2]}
                        expenseSummary = {expenseSummary}
                    />
                    <CategorySummaryTile
                        category = {categoryList[3]}
                        expenseSummary = {expenseSummary}
                    />
                </section>                 
            </div>
        </section>        
    );
}