import ExpenseItems from "./ExpenseItems";
import './Expense.css';
import Cards from "../UI/Cards";
import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";


const Expense = (props) => {
  const[filteredYear,setFilteredYear] = useState('2020');
  
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);

  }
  return (
    <div>
    <Cards className="expenses">
      <ExpenseFilter selected={filteredYear} onchangeFilter={filterChangeHandler}/>
      {props.items.map((expense) => (
      <ExpenseItems
         key={expense.id}
         title={expense.title} 
         amount={expense.amount} 
         date={expense.date}
         />
      ))} 
    </Cards>
    </div>
  )
}

export default Expense