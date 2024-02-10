import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle,setEnteredTitle] = useState("")
    const [enteredAmount,setEnteredAmount] = useState("")
    const [enteredDate,setEnteredDate] = useState("")

    function HandlerTitle(event){
        setEnteredTitle(event.target.value)
    }
    function HandlerAmount(event){
        setEnteredAmount(event.target.value)
    }
    function HandlerDate(event){
        setEnteredDate(event.target.value)
    }

  return (
    <form>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' onChange={HandlerTitle}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' onChange={HandlerAmount}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2021-01-01' step='2024-12-31' onChange={HandlerDate}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit' >Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm;