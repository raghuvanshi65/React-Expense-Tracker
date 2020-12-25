import React , {useContext}from 'react';
import { HistoryContext } from '../contexts/HistoryContext';
import '../styles/transaction.css';

function Transaction({transaction}) {

    const { deleteOpt } = useContext(HistoryContext);

    const remove = (id) =>  deleteOpt(id);

    return  transaction.amount < 0 ? <li key={transaction.key} className="list-group-item list-group-item-danger"><>{transaction.title} ( {transaction.amount} INR )</>  
        <button className="btn-remove" onClick={()=>{remove(transaction.key)}}>Remove</button>
        </li>:
        <li key={transaction.key} className="list-group-item list-group-item-primary">{transaction.title} ( {transaction.amount} INR )    
            <button className="btn-remove" onClick={()=>{remove(transaction.key)}}>Remove</button>
        </li> ;
}

export default Transaction
