import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

export function Transactions() {
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
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        {transactions.map(transaction => {
                            return (
                                <tr key={transaction.id}>
                                    <td width="50%">{transaction.description}</td>
                                    <td>
                                        <PriceHighlight variant='income'>
                                            {transaction.price}
                                        </PriceHighlight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.createdAt}</td>
                                </tr>
                            )
                        })}
                       

                        <tr>
                            <td width="50%">Teste</td>
                            <td>
                                <PriceHighlight variant='outcome'>
                                    - R$ 999
                                </PriceHighlight>
                            </td>
                            <td>Alimentação</td>
                            <td>18/04/2022</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>

        </div>
    )
}