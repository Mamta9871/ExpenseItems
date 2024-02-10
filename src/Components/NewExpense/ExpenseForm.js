import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
    const[userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    function HandlerTitle(event){
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
        })
    }
    function HandlerAmount(event){
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
        })
    }
    function HandlerDate(event){
        setUserInput({
            ...userInput,
            enteredDate: event.target.value
        })
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
