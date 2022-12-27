import React, {useEffect, useState} from 'react';

import './App.css';
import Money from './components/Money';
import Saving from './components/Saving';
import Balance from './components/Balance';
import {MoneyItem} from './types/money';

function App() {
  const [incomes, setIncomes] = useState<MoneyItem[]>([]);
  const [expenses, setExpenses] = useState<MoneyItem[]>([]);
  const [saving, setSaving] = useState(0);
  const [balance, setBalance] = useState(0);
  const totalIncome = incomes.reduce((prev, current) => prev+current.amount, 0);
  const totalExpense = expenses.reduce((prev, current) => prev+current.amount, 0);

  useEffect (() => {
    setBalance(totalIncome - totalExpense - saving)
  }, [incomes, expenses, saving]);

  return (
    <div className = "App">
      <Money option = 'income' list = {incomes} setList = {setIncomes}/>
      <Money option = 'expense' list = {expenses} setList = {setExpenses}/>
      <Saving saving = {saving}/>
      <Balance balance = {balance} setSaving = {setSaving} setBalance = {setBalance}/>
    </div>
  );
};

export default App