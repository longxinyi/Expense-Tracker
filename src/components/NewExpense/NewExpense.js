import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React, { useState } from "react";

function NewExpense(props) {
  const [showButton, setShowButton] = useState(false);

  const showButtonHandler = () => {
    setShowButton(true);
  };

  const hideButtonHandler = () => {
    setShowButton(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowButton(false);
  };

  return (
    <div ClassName="new-expense">
      {!showButton && (
        <button onClick={showButtonHandler}>Add New Expense</button>
      )}

      {showButton && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          hideButton={hideButtonHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
