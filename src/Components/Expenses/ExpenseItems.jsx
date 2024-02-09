import React, { useState } from 'react';
import Cards from '../UI/Cards.js'
import ExpenseDate from './ExpenseDate.js'
import './ExpenseItem.css'


const ExpenseItems = (props) =>{
    const[price,SetPrice]=useState()
    const ChangePrice = () => {
        SetPrice("100")
    }
    return(
        <>
        <Cards className="Items">
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item-description'>
                <h2>{props.title}</h2>
                <div className='expense-item-price'>${price}</div>
            </div>
            <button onClick={ChangePrice}id='btn'>Change</button>
       </div>
     </Cards>
     </>
    )
}
export default ExpenseItems