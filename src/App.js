import React from 'react';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { History } from './components/History';
import { IncomeExpense } from './components/IncomeExpense';
import { ContextProvider } from './contexts/HistoryContext';
import './styles/App.css';


function App() {
  return (
    <div className="App">
      <ContextProvider>
      <Header></Header>
      <Balance></Balance>
      <AddTransaction></AddTransaction>
      <IncomeExpense></IncomeExpense>
      <History></History>
      </ContextProvider>
    </div>
  );
}

export default App;
