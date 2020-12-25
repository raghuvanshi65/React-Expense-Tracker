import React, { useContext , useEffect } from 'react';
import { HistoryContext } from '../contexts/HistoryContext';
import '../styles/balance.css';

export const Balance = (props) => {

    const {transaction1} = useContext(HistoryContext);
    let balance = 0;
    transaction1.forEach(element => {
        balance += Number(element.amount);    
    });
    
    return (
        <div className="Balance">
            <h5>&nbsp; {balance>=0 ? "Balance" : "Debt" }</h5>
            <span className="display-4">{balance.toFixed(2)}</span>&nbsp;&nbsp;<span>INR</span>
        </div>
    )
}
