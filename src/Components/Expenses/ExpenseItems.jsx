import React, { useState } from 'react';
import Cards from '../UI/Cards.js'
import ExpenseDate from './ExpenseDate.js'
import './ExpenseItem.css'


const ExpenseItems = (props) =>{
    const[current,SetUpdate]=useState()
    const ChangeTitle = () => {
        SetUpdate("Car Insurance")
    }
    return(
        <>
        <Cards className="Items">
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item-description'>
                <h2>{current}</h2>
                <div className='expense-item-price'>${props.amount}</div>
            </div>
            <button onClick={ChangeTitle}id='btn'>Change</button>
       </div>
     </Cards>
     </>
    )
}
export default ExpenseItems