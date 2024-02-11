import Expense from "./Components/Expenses/Expense.js";
import React, { useState } from 'react';
import NewExpense from "./Components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  { id: 'e1',
    title: 'Food', 
    amount: 10,
    date: new Date(2021,3,28)},

  { id: 'e2',
    title: 'Petrol', 
    amount: 100, 
    date: new Date(2022,6,15)},

  { id: 'e3',
    title: 'Movies', 
    amount: 200, 
    date: new Date(2023,2,25)},

  { id: 'e4',
    title: 'Car Insurance', 
    amount: 294.67, 
    date: new Date(2024,7,3)},
]


function App() {
  const[expenses, setExpenses] = useState(DUMMY_EXPENSES)
  
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses =>{
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense items={expenses}/>
    </>
  )
}

export default App;


