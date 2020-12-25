import React, { useContext } from 'react';
import { HistoryContext } from '../contexts/HistoryContext';
import '../styles/history.css';
import Transaction from './Transaction';

export const History = () => {

    const {transaction1} = useContext(HistoryContext);

    console.log(transaction1);

    return (
        <div className="History">
            <h3 className="">Transactions</h3>
            <ul className="list-group">
            {
                transaction1.map((transaction)=>
                {
                    return <Transaction transaction={transaction} key={transaction.key}></Transaction>
                })
            }
            </ul>
        </div>
    )
}
