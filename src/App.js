import React, {Fragment, useState, useEffect} from 'react';
import "./App.css";
import AddExpense from './AddExpense';
import DaySummary from './DaySummary';
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
    useEffect(() => {
            const getAPI = () => {
            const API = 'http://127.0.0.1:5000/'
            fetch(API)
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                })
        };
        getAPI();
    }, []);
    const [newExpenseSummary, setExpense] = useState(expenseSummary);
    return (
        <div className='main-cont'>      
            <PageHeader/>
            <div className='body-cont'> 
                <DaySummary expenseSummary={newExpenseSummary} />                
                <AddExpense 
                    onAddExpense={(newExpense) => 
                        {
                            console.log('newExpense',newExpense)
                            setExpense([
                                ...newExpenseSummary,                                
                                newExpense
                            ]);
                            console.log('newExpenseSummary',newExpenseSummary);
                        }
                    }
                />                        
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
