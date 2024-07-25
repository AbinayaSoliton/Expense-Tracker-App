import "./AddExpense.css";
import { expenseFieldNames } from "./data.js";
import {Button, Radio, RadioGroup, FormControlLabel} from '@material-ui/core'; 
import { Expense, ExpenseFieldName, ExpenseFieldNames } from "./expenseInterface";
import React from 'react';
import { UseSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";
import {addExpense, removeExpense} from './expenseSlice';
import { useSelector } from "react-redux";

interface AddExpenseProps {
    onAddExpense: (arg: Expense) => void;
}

interface ExpenseFieldLabelProps {
    label: string;
}

interface ExpenseFieldInputProps {
    field: ExpenseFieldName;
}

const ExpenseFieldLabel = ({label}: ExpenseFieldLabelProps) => {
    return(
        <label className="expense-field-label">
            {label}
        </label>
    )
}

const ExpenseFieldInput = ({field}: ExpenseFieldInputProps) => {
    if(field.fieldType === 'text' || field.fieldType === 'number') {
        return (
            <input type={field.fieldType} id={field.id} className='expense-field-input'> 
            </input>
        )
    }
    else if(field.fieldType === 'date') {
        return (
            <input type={field.fieldType} id={field.id} 
                min={field.fieldMin?.toString().split('G')[0]} 
                max={field.fieldMax?.toString().split('G')[0]} 
                // value = {field.fieldValue?.toString().split('G')[0]} 
                className='expense-field-input'> 
                
            </input>
        )
    }
    else if(field.fieldType === 'select') {
        return(
            <select className='expense-field-input' id={field.id}>
                <option value='Food' selected>Food</option>
                <option value='Dress' selected>Dress</option>
                <option value='Travel' selected>Travel</option>
                <option value='Grocery' selected>Grocery</option>
            </select>
        )
    }
    else if(field.fieldType === 'radio') {
        return(
            <>
                <RadioGroup name="Essential" defaultValue="yes" className='expense-field-essential'>
                    <FormControlLabel value="yes" label="Yes" control={<Radio />} />
                    <FormControlLabel value="no" label="No" control={<Radio />} />
                    <FormControlLabel value="partial" label="Partial" control={<Radio />} />
                </RadioGroup>
            </>
            
        )
    }
    else return null;
}

function ExpenseFieldsList () {
    const expenseFields = expenseFieldNames.map(field=>
        <>
            <ExpenseFieldLabel
                label = {field.labelName}                       
            /> 
            <ExpenseFieldInput 
                field = {field}
            />
        </>
    );
    return (
        <div className="expense-fields-grid">    
            {expenseFields}
        </div>
    );
}

const AddExpense: React.FC<AddExpenseProps> = ({onAddExpense}:AddExpenseProps ) => {
    const expense = useSelector((state: RootState) => state.expense.expense);
    const dispatch = useDispatch<AppDispatch>();

    const handleAddExpense = (newExpense: Expense) => {
        // const newExpense = {
        //     item:'Juice',
        //     category:'Food',
        //     dateInUTC:new Date('2023-12-11'),
        //     amountInRupees: 340,
        //     isNeeded: 'partial'
        // };
        dispatch(addExpense(newExpense))
    }

    return (
        <div className='add-expense-cont'>
            <div>
                Add Expense
            </div>
            <div className="add-expense-fields">
                <ExpenseFieldsList />  
                <div>
                    {/* Expense List */}
                    {/* <ul> */}
      {/* {expense.map((item) => (
        <li key={item.id} style={{ display: 'block', color: 'black' }}>
          {item.name} - {item.value}
          <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
        </li>
      ))}
    </ul> */}
                    {/* <ul>
                        {expense.map((item) => (     
                            <li key={item.id} style={{ display: 'block', color: 'black' }}>
                                {item.name} - {item.value}
                                <button onClick={() => handleRemoveItem(item.id)}>
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul> */}
                    {/* <button onClick={handleAddItem}>
                        Add Item
                    </button> */}
            </div>
            {/* <input type='date' min='2024-01-23' max='2049-10-10'></input> */}
                                 
            </div>  

 
            <Button color='primary' variant='contained' className='add-expense-btn' onClick={
                    () => {                        
                        const item = (document.getElementById('Item') as HTMLInputElement)?.value;
                        console.log('item: ', item);
                        const category = (document.getElementById('Category') as HTMLSelectElement)?.value;
                        console.log('category: ', category);
                        const dateInUTC = (document.getElementById('Date') as HTMLInputElement)?.value;
                        console.log('dateInUTC: ', dateInUTC);
                        const amountInRupees = (document.getElementById('Amount') as HTMLInputElement)?.value;
                        const isNeeded = (document.querySelector('input[name="Essential"]:checked') as HTMLInputElement)?.value;

                        if (item && category && dateInUTC && amountInRupees && isNeeded) {
                            const date = new Date(dateInUTC)
                            // const onlyDate = date.toString().split('G')[0]
                            // const onlyDate = new Date(date.getFullYear(), date.getMonth(), date.getDate())
                            const newExpense = {
                                item,
                                category,
                                dateInUTC: date,
                                amountInRupees: parseFloat(amountInRupees),
                                isNeeded
                            }
                            handleAddExpense(newExpense);
                            // onAddExpense({
                            // item,
                            // category,
                            // dateInUTC: date,
                            // amountInRupees: parseFloat(amountInRupees),
                            // isNeeded
                            // });
                        } else {
                            console.error('One or more required fields are missing.');
                        }
                    }
                }>
                Add Expense
            </Button>
        </div>
    );
}

export default AddExpense;