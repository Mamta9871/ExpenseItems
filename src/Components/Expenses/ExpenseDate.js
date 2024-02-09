import './ExpenseDate.css'
import React from 'react';

const ExpenseDate = (props) =>{
    const day = props.date.toLocaleString('en-US',{month:'long'});
    const month = props.date.toLocaleString('en-Us',{day:'2-digit'})
    const year = props.date.getFullYear();

    return(
        <div className='Calender'>
            <h2 className="day">{day}</h2>
            <h2 className="month">{month}</h2>
            <h2 className="year">{year}</h2>
        </div>
    )

}
export default ExpenseDate;