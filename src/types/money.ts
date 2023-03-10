import React from "react"

export interface MoneyItem {
    title: string,
    amount: number,
    date: string,
    id?: number
};

export interface MoneyProps {
    option: "income"|"expense",
    list: MoneyItem[],
    setList: React.Dispatch<React.SetStateAction<MoneyItem[]>>
};