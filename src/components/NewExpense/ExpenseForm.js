import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmnt, setEnteredAmnt] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amntChangeHandler = (event) => {
    setEnteredAmnt(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmnt,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmnt("");
    setEnteredDate("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmnt}
              onChange={amntChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              min="2019-01-01"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.hideButton}>
            Cancel
          </button>
          <button type="submit"> Add Expense </button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
