import "./AddExpense.css";
import { expenseFieldNames } from "./data.js";

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
            <input type='text' id={field.id} className='expense-field-input'> 
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
            <button className='add-expense-btn' onClick={
                    () => {                        
                        onAddExpense({
                            item: document.getElementById('Item').value,
                            category: document.getElementById('Category').value,
                            dateInUTC: document.getElementById('Date').value,
                            amountInRupees: document.getElementById('Amount').value,
                            isNeeded: 'yes'
                        })
                    }
                }>
                Add Expense
            </button>
        </div>
    );
}