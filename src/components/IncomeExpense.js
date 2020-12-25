import React, { useContext } from 'react';
import { HistoryContext } from '../contexts/HistoryContext';
import '../styles/incomeExpense.css';

export const IncomeExpense = (props) => {

    const {transaction1} = useContext(HistoryContext);

    // const amount = transaction1.map((transaction)=>transaction.amount);

    // const income = amount.filter(item => item > 0 ).reduce((acc , item)=> (acc += item), 0 ).toFixed(2);
    // const expense = amount.filter(item => item < 0 ).reduce((acc , item)=> (acc += item), 0 ).toFixed(2);

    let balance = 0 , expense = 0 ;
    transaction1.forEach(element =>
        {
            if(element.amount<0)
            expense += Number(element.amount);
            else
            balance += Number(element.amount);
        })

    return (
        <div className="IncomeExpense">
            <section className="Income">
            <h5>&nbsp; Income</h5>
            <div className="Details">
            <h2 className="">{balance.toFixed(2)}</h2>&nbsp;&nbsp;<span>INR</span>
            </div>
            </section>
            <section className="Expense">
            <h5>&nbsp; Expense</h5>
            <div className="Details">
            <h2 className="">{Math.abs(expense).toFixed(2)}</h2>&nbsp;&nbsp;<span>INR</span>
            </div>
            </section>
        </div>
    )
}
