import React , {useContext, useReducer , useState , useEffect , useRef} from 'react';
import { HistoryContext } from '../contexts/HistoryContext';
import '../styles/addTransaction.css'

export const AddTransaction = () => {

    const {add , transaction1 } = useContext(HistoryContext);

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);


    function createKey(arr)
    {
        return arr.length+1;
    }

    const submitForm = (e) =>
    {
        e.preventDefault();
        const newObj = 
        {
            key : createKey(transaction1) , 
            title , amount 
        }

        add(newObj);

    }

    return (
        <div className="AddTransaction">
            <h3>Add a new Transaction</h3>
            <br/>
            <form action="" className="form-group Transaction-Form" onSubmit={submitForm} >
                <label htmlFor="title">Title</label>
                <br/>
                <input type="text" id="title" className="form-control" placeholder="Enter Bookmark" required autoComplete="off"
                        value={title}
                    onChange={(e)=>{
                        setTitle(e.target.value)
                    }} />
                <br/>
                <label htmlFor="amount">Amount</label>
                <br/>
                <input type="number" step=".001" id="amount" className="form-control" placeholder="Enter Amount"  
                    onChange={(e)=>{
                        setAmount(Number(e.target.value).toFixed(2));
                    }} />
                <div className="mt-2"><small>( add ' - ' for expense , ' + ' for earning )</small></div>
                <br/>
                <button type="submit" className="btn btn-primary">Add Transaction</button>
            </form>
        </div>
    )
}
