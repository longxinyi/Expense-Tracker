import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [year, setYear] = useState();

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear() == year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter setYear={setYear} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
