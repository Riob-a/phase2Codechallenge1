import './App.css';
import { useState } from 'react';
import CreateTable from './components/CreateTable';
import CreateInput from './components/CreateInput';
import CreateForm from './components/CreateForm';
import CreateHeader from './components/Header';

function App() {

  const dataArray = [
    {
        date: "2019-12-01",
        description: "Paycheck from Bob's Burgers",
        category: "Income",
        amount: 1000
    },
    {
        date: "2019-12-01",
        description: "South by Southwest Quinoa Bowl at Fresh $ Co",
        category: "Food",
        amount: -10.55
    },
    {
        date: "2019-12-02",
        description: "South by Southwest Quinoa Bowl at Fresh $ Co",
        category: "Food",
        amount: -10.55
    },
    {
        date: "2019-12-04",
        description: "Sunglasses,Urban Outfitters",
        category: "Fashion",
        amount: -24.99
    },
    {
        date: "2019-12-06",
        description: "Venmo, Alice Pays you For Burrito",
        category: "Food",
        amount: 8.75
    },
    {
        date: "2019-12-06",
        description: "Chipotle",
        category: "Food",
        amount: -17.59
    }
]
const [transactions, setTransactions]= useState(dataArray)
  
return (
  <div className='container'>
    <CreateHeader />
    <CreateInput transactions = {transactions} setTransactions = {setTransactions} dataArray = {dataArray}/>
    <CreateForm transactions={transactions} setTransactions={setTransactions} />
    <CreateTable transactions = {transactions} />
  </div>
  );
}

export default App;
