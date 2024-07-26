import React, {Fragment, useState, useEffect} from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddExpense from './AddExpense';
import ExpenseSummary from './ExpenseSummary';
import GraphView from './GraphView';
import { expenseSummary } from './data';
import { Link } from 'react-router-dom';

const pageHeaderText = 'Expense Tracker';
const pageFooterText = 'Dev';

function PageHeader() {
    return (
        <div className='header-cont'>
            <div className='app-header-text'>
                {pageHeaderText}
            </div>
            <div className='bread-crumb'>
                <nav className='nav-bar'>
                    <ul>
                        <li><Link to='/'>Expense Summary | </Link></li>
                        <li><Link to='/graph'>Graph View</Link></li>
                    </ul>
                </nav>
            </div>
            
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
    // useEffect(() => {
    //         const getAPI = () => {
    //         const API = 'http://127.0.0.1:5000/'
    //         fetch(API)
    //             .then((response) => {
    //                 console.log(response);
    //                 return response.json();
    //             })
    //             .then((data) => {
    //                 console.log(data);
    //             })
    //     };
    //     getAPI();
    // }, []);
    const [newExpenseSummary, setExpense] = useState(expenseSummary);
    return (
        <div className='main-cont'>      
            <PageHeader/>
            <div className='body-cont'>
                <Routes>
                    <Route path='/' element={
                        <ExpenseSummary expenseSummary={newExpenseSummary} />                
                    }/>
                    <Route path='/graph' element={
                        <GraphView/>
                    }/>
                </Routes>                    
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

// import logo from './lsogo.svg';
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
