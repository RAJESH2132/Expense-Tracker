import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },

  { id: "e6", title: "Groceries", amount: 150, date: new Date(2020, 2, 5) },
  { id: "e7", title: "Clothing", amount: 75.99, date: new Date(2020, 4, 18) },
  { id: "e8", title: "Utilities", amount: 200, date: new Date(2020, 8, 30) },
  { id: "e9", title: "Books", amount: 50.25, date: new Date(2020, 11, 8) },
  {
    id: "e10",
    title: "Home Improvement",
    amount: 300.5,
    date: new Date(2021, 7, 22),
  },
  { id: "e11", title: "Groceries", amount: 120.75, date: new Date(2021, 8, 5) },
  {
    id: "e12",
    title: "Internet Bill",
    amount: 80,
    date: new Date(2021, 10, 16),
  },
  { id: "e13", title: "Gasoline", amount: 45.3, date: new Date(2021, 11, 30) },
  { id: "e14", title: "Gift", amount: 25, date: new Date(2022, 1, 14) },
  { id: "e15", title: "Movie Tickets", amount: 40, date: new Date(2022, 3, 7) },
  { id: "e16", title: "Restaurant", amount: 85.6, date: new Date(2022, 5, 22) },
  { id: "e17", title: "Healthcare", amount: 120, date: new Date(2022, 7, 3) },
  {
    id: "e18",
    title: "Fitness Membership",
    amount: 75,
    date: new Date(2022, 8, 18),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
