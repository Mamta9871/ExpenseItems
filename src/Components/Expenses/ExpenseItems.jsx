import React from 'react';
import Cards from '../UI/Cards.js'
import ExpenseDate from './ExpenseDate.js'
import './ExpenseItem.css'


const ExpenseItems = (props) =>{
    return(
        <>
        <Cards className="Items">
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item-description'>
                <h2>{props.title}</h2>
                <div className='expense-item-price'>${props.amount}</div>
            </div>
       </div>
     </Cards>
     </>
    )
}
export default ExpenseItems