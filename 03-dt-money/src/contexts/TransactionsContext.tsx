import { ReactNode, createContext, useEffect, useState } from "react";

interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

interface TransactionContextType {
    transactions: Transaction[];
}

interface TransactionsProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider( {children}: TransactionsProviderProps) {
    const [transactions, setTransaction] = useState<Transaction[]>([])

    // Função assincrona para carregar as transações
    async function loadTransactions() {
        const response = await fetch('http://localhost:3000/transactions');
        const data = await response.json();

        setTransaction(data)
    }

    // Dentro do useEffect nao é possivel chamar funções asincronas
    useEffect(() => {
        loadTransactions()
    }, [])


    return (
        <TransactionsContext.Provider value={{transactions}}>
            {children}
        </TransactionsContext.Provider>
    )
}