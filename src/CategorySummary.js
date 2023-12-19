import { categoryDataTitle } from "./data.js";
import "./CategorySummary.css"
// import { useState } from 'react';

export default function CategorySummaryTile({category, expenseSummary}) {    
     const filteredCategoryData = expenseSummary.filter(expense => 
        expense.category === category
     );
    return(
        <div className="cat-summary-tile">
            <div className='cat-summary-title-cont'>
                {category}
            </div>
            <div className='cat-summary-data-cont'>                  
                <CategorySummaryData
                    categoryData={filteredCategoryData}
                />
            </div>            
        </div>
    )
}

export function CategoryDataTitle() {
    return categoryDataTitle.map(title =>
        <>
            <span className='cat-data-title'>
                {title}
            </span>
        </>
    )
}

export function CategorySummaryData({categoryData}) {
    const catSummaryData = categoryData.map(data => 
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
        </>
    )
    return (       
        <div className='cat-data-cont'>  
            <CategoryDataTitle className='cat-data-title'/>
            {catSummaryData}
        </div>                    
    )
}