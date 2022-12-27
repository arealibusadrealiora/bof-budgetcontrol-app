import React, {useState} from "react";

import {BalanceProps} from "../types/balance";

const Balance = ({ balance, setSaving }: BalanceProps) => {
  const [itemAmount, setItemAmount] = useState(0);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (itemAmount <= balance) {
            setSaving((saving) => saving + itemAmount);
        } else {
            alert("Not enough balance.");
        }
    };

    return (
        <div className = "balance">
            <p>Balance: {balance}</p>
            <form onSubmit = {(e) => onSubmit(e)}>
                <label htmlFor = "addSaving">Transfer to saving account </label>
                <input type = "number" name = "addSaving" id = "addSaving" onChange = {(e) => setItemAmount(Number(e.target.value))}/>
                <button type = "submit">Transfer</button>
            </form>
        </div>
    );
};

export default Balance