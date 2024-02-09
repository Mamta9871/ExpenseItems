import Expense from "./Components/Expenses/Expense.js";
import React from 'react';

function App() {
  const expenses = [
    { id: 'e1',
      title: 'Food', 
      amount: 10,
      location: 'Home',
      date: new Date(2021,2,28)},

    { id: 'e2',
      title: 'Petrol', 
      amount: 100, 
      location: 'PetrolPump',
      date: new Date(2021,2,28)},

    { id: 'e3',
      title: 'Movies', 
      amount: 200, 
      location: 'Cinema',
      date: new Date(2021,2,28)},

    { id: 'e4',
      title: 'Car Insurance', 
      amount: 294.67, 
      location: 'Agency',
      date: new Date(2021,2,28)},
  ]
  return (
    <>
      <h2>Let's get started!</h2>
      <Expense items={expenses}/>
    </>
  )
}

export default App;


