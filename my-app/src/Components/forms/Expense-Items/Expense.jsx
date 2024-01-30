// import './Expense.css'
function ExpenseItems(props){
    const expenseDate = new Date(2021,2,28);
    const expenseTitle = "Car Insurance";
    const expenseAmount = 294.67

    return(
       <div className="expense-item">
        <div>Date:-{props.date.toISOString()}</div>
        <div className="expense-item_description">
            <h2>Title:-{props.title}</h2>
            <h2>Location:-{props.location}</h2>
            <div className='expense-item_price'>Amount:-{props.amount}</div>
        </div>
       </div>
    )
}
export default ExpenseItems