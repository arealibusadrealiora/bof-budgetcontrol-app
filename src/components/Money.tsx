import React, {useState} from "react";

import {MoneyProps} from "../types/money";

const Money = ({option, list, setList}: MoneyProps) => {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
            setList([{amount, date, title, id: Date.now() }, ...list])
    };
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState("");

    return (
        <div>
            <form onSubmit = {(e) => onSubmit(e)}>
                <div>
                    <label htmlFor = "title">Source of {option} </label>
                    <input type = "text" name = "title" id = "title" onChange = {(e) => setTitle(e.target.value)} />
                </div>  
                <div>
                    <label htmlFor = "amount">Amount of {option} </label>
                    <input type = "number" name = "amount" id = "amount" onChange = {(e) => setAmount(Number(e.target.value))}/>
                </div>
                <div>
                    <label htmlFor = "date">Date of {option} </label>
                    <input type = "date" name = "date" id = "date" onChange = {(e) => setDate(e.target.value)}/>
                </div>
                <button type = 'submit'>Add {option}</button>
            </form>
            <ul>
                {
                    list.length > 0 && list.map(item => 
                    <li key = {item.id}> {item.date}, {item.title} + {item.amount}</li>)
                }
            </ul>
        </div>
    );
};

export default Money