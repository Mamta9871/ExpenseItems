import ExpenseItems from "./ExpenseItems";
import './Expense.css';
import Cards from "../UI/Cards";
import React from "react";


const Expense = (props) => {
  return (
    <Cards className="expenses">
      <ExpenseItems
        title={props.items[0].title}
        amount={props.items[0].amount}
        location={props.items[0].location}
        date={props.items[0].date}
      ></ExpenseItems>
      <ExpenseItems
        title={props.items[1].title}
        amount={props.items[1].amount}
        location={props.items[1].location}
        date={props.items[1].date}
      ></ExpenseItems>
      <ExpenseItems
        title={props.items[2].title}
        amount={props.items[2].amount}
        location={props.items[2].location}
        date={props.items[2].date}
      ></ExpenseItems>
      <ExpenseItems
        title={props.items[3].title}
        amount={props.items[3].amount}
        location={props.items[3].location}
        date={props.items[3].date}
      ></ExpenseItems>
    </Cards>
  )
}

export default Expense