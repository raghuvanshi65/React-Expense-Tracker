import React , {useReducer} from 'react';

const history = 
{
    transactions : 
    [
        {key : 1 , title : "Sales" , amount : 20000.00 },
        {key : 2 , title : "Income" , amount : 40000.00 },
        {key : 3 , title : "Bike" , amount : -20000.00 },
        {key : 4 , title : "Grocery" , amount : -2078.99 },
        {key : 5 , title : "Parcel" , amount : -300.770 }
    ]
}

const reducer = ( state , action ) =>
{
    switch (action.opt) {
        case "DELETE":
            return {
                ...state , transactions : state.transactions
                                            .filter(transaction => transaction.key != action.idOfTransaction)
            }
            break;
            
        case "ADD" :
            return {
                ...state , transactions : [ ...state.transactions , action.transactionToBeAdded ]
            }
            break;

        default:
            return state;
            break;
    }
}

const HistoryContext = React.createContext();

function ContextProvider(props)
{   
    const [history1 , dispatch] = useReducer(reducer, history);

    function deleteTransaction(id)
    {
        dispatch({
            opt : "DELETE" , 
            idOfTransaction : id
        })
    }

    function addTransaction(obj)
    {
        dispatch({
            opt : "ADD" , 
            transactionToBeAdded : obj
        })
    }

    return (
        <HistoryContext.Provider value={{
            transaction1 : history1.transactions , 
            add : addTransaction , 
            deleteOpt : deleteTransaction
        }}>
            {props.children}
        </HistoryContext.Provider>
    );
}

export {HistoryContext , ContextProvider};