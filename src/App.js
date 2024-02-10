import Expense from "./Components/Expenses/Expense.js";
import React from 'react';
import NewExpense from "./Components/NewExpense/NewExpense";


function App() {
  const expenses = [
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

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  }

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expense items={expenses}/>
    </>
  )
}

export default App;


