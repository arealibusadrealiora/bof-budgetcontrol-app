import React from "react"

export interface BalanceProps {
    balance: number,
    setSaving: React.Dispatch<React.SetStateAction<number>>,
    setBalance: React.Dispatch<React.SetStateAction<number>>
};