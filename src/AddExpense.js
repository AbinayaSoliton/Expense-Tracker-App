import "./AddExpense.css";
import { expenseFieldNames,expenseSummary } from "./data.js";

function ExpenseField ({label}) {
    return(
        <label className="expense-field-label">
            {label}
        </label>
    )
}

function ExpenseFieldsList () {
    const expenseFields = expenseFieldNames.map(field=>
        <>
            <ExpenseField
                label = {field.labelName}                       
            /> 
            <input type='text' className='expense-field-input'> 
            </input>
        </>
    );
    return (
        <div className="expense-fields-grid">    
            {expenseFields}
        </div>
    );
}

export default function AddExpense({onAddExpense}) {
    return (
        <div className='add-expense-cont'>
            <div>
                Add Expense
            </div>
            <div className="add-expense-fields">
                <ExpenseFieldsList />                       
            </div>            
            <button className='add-expense-btn' onClick={onAddExpense}>
                Add Expense
            </button>
        </div>
    );
}