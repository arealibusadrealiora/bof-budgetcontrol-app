import React, {useState} from "react";

import {SavingProps} from "../types/saving";

const Saving = ({saving}: SavingProps) => {
    const [target, setTarget] = useState(0);
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    };

    return (
        <div className = "saving">
            <form onSubmit = {(e) => onSubmit(e)}>
                <p>Current savings: {saving}</p>
                <p>Target: {target}</p>
                <progress value={saving} max = {target} ></progress><br />
                <label htmlFor = "">Set target </label>
                <input type = "number" name = "target" id = "target" onChange = {(e) => setTarget(Number(e.target.value))}/>
                <button type = "submit">Reset</button>
            </form>
        </div>
    );
};

export default Saving