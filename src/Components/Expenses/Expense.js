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
    <Cards className="expenses">
      <ExpenseFilter selected={filteredYear} onchangeFilter={filterChangeHandler}/>
      <ExpenseItems
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItems>
      <ExpenseItems
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItems>
      <ExpenseItems
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItems>
      <ExpenseItems
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItems>
    </Cards>
  )
}

export default Expense