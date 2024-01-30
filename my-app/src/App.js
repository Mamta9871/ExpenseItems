import ExpenseItems from "./Components/forms/Expense-Items/Expense";
// import './Expense.css';
function App() {
  const expenses = [
    { title: 'Food', 
      amount: 10,
      location: 'Home',
      date: new Date(2021,2,28)},

    { title: 'Petrol', 
      amount: 100, 
      location: 'PetrolPump',
      date: new Date(2021,2,28)},

    { title: 'Movies', 
      amount: 200, 
      location: 'Cinema',
      date: new Date(2021,2,28)},

    { title: 'Car Insurance', 
      amount: 294.67, 
      location: 'Agency',
      date: new Date(2021,2,28)},
  ]
  return (
  
    <div>
      <h2 className="Title">Lets get started</h2>
      <ExpenseItems 
        title={expenses[0].title}
        amount={expenses[0].amount}
        location={expenses[0].location}
        date={expenses[0].date}
      ></ExpenseItems>
      <ExpenseItems
        title={expenses[1].title}
        amount={expenses[1].amount}
        location={expenses[1].location}
        date={expenses[1].date}
      ></ExpenseItems>
      <ExpenseItems
        title={expenses[2].title}
        amount={expenses[2].amount}
        location={expenses[2].location}
        date={expenses[2].date}
      ></ExpenseItems>
      <ExpenseItems
        title={expenses[3].title}
        amount={expenses[3].amount}
        location={expenses[3].location}
        date={expenses[3].date}
      ></ExpenseItems>
    </div>
  )
}

export default App;


