import { categoryDataTitle } from "./data";
import "./CategorySummary.css"
import { ExpenseSummary, Expense } from "./expenseInterface";
import React from 'react';
import { UseSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "./store";
import {removeExpense} from './expenseSlice';
import { useSelector } from "react-redux";
// import { useState } from 'react';

interface categorySummaryTileProps {
    category: string,
    expenseSummary: Expense[]
}

interface categoryDataTotalProps {
    totalAmount: Number
}

interface categorySummaryDataProps {
    categoryData: Expense[],
    handleRemoveExpense: (arg: string) => void;
}

const CategorySummaryTile: React.FC<categorySummaryTileProps> = ({category, expenseSummary}) => {    
    const expense = useSelector((state: RootState) => state.expense.expense);
    // const dispatch = useDispatch<AppDispatch>();
    //  const filteredCategoryData = expenseSummary.filter((expense: Expense) =>         
    //     expense.category === category
    //  );
    const dispatch = useDispatch<AppDispatch>();

    const handleRemoveExpense = (item: string) => {
        dispatch(removeExpense(item));
    }
    const filteredCategoryData = expense.filter((expense: Expense) =>         
        expense.category === category
     );
     console.log('filteredCategoryData: ', filteredCategoryData);

     const filteredCategoryDataTotal = filteredCategoryData.reduce(
        (CategoryTotal,expense) => Number(expense.amountInRupees) + CategoryTotal,0);
    return(
        <div className="cat-summary-tile">
            <div className='cat-summary-title-cont'>
                {category}
            </div>
            <div className='cat-summary-data-cont'>                  
                <CategorySummaryData
                    categoryData={filteredCategoryData}
                    handleRemoveExpense = {handleRemoveExpense}
                />
            </div>  
            <div>
                <CategoryDataTotal totalAmount = {filteredCategoryDataTotal} />
            </div>          
        </div>
    )
}

const CategoryDataTitle = () => {
    return (
        <>
        {categoryDataTitle.map(title => (
            <span className='cat-data-title'>
                {title}
            </span>
        ))}
        </>
)
}

const CategoryDataTotal = ({totalAmount}: categoryDataTotalProps) => {
    return (
        <>
            <span className='cat-data-title'>
                Total Cost : {totalAmount}
            </span>
        </>
    )
}

const CategorySummaryData = ({categoryData, handleRemoveExpense}:categorySummaryDataProps) => {
    const catSummaryData = categoryData?.map(data => 
        <>
            <span className='cat-data'>
                {data.item}
            </span>
            <span className='cat-data'>
                {data.amountInRupees}
            </span>
            <span className='cat-data'>
                {data.isNeeded}
            </span>
            <span className='cat-data'>
                {new Date(data.dateInUTC).toISOString().split('T')[0]}
                <button onClick={()=>handleRemoveExpense(data.item)}>Remove</button>
            </span>
        </>
    )
    return (       
        <div className='cat-data-cont'>  
            <CategoryDataTitle/>
            {catSummaryData}            
        </div>                    
    )
}
export default CategorySummaryTile;