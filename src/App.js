import React from 'react';
import "./App.css";
import AddExpense from './AddExpense';
import DaySummary from './DaySummary';
import { useState } from 'react';  
import { expenseSummary } from './data';

const pageHeaderText = 'Expense Tracker';
const pageFooterText = 'Dev';

function PageHeader() {
    return (
        <div className='header-cont'>
            {pageHeaderText}
        </div>
    )
}

function PageFooter() {
    return (
        <div className='footer-cont'>
            {pageFooterText}
        </div>
    )
}

export default function App () {
    const [expenseSummary, setExpense] = useState([]);
    return (
        <div className='main-cont'>      
            <PageHeader/>
            <div className='body-cont'> 
                <DaySummary />                
                <AddExpense 
                    onAddExpense={() => 
                        {
                            setExpense([
                                ...expenseSummary,
                                {
                                    item:'Lunch',
                                    category:'Food',
                                    dateInUTC:'2023-13-12 12:39:32',
                                    amountInRupees: 120,
                                    isNeeded: 'yes'
                                }
                            ]);
                            console.log(expenseSummary);
                        }
                    }
                />   
                <ul>
                    {expenseSummary.map(expense => (
                        <li key={expense.item}>{expense.category}</li>
                    ))}
                </ul>                        
            </div>  
            <PageFooter/>
        </div>
    )
}

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
