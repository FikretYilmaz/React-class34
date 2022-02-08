import './App.css';
import React, { useState, useEffect } from 'react';
import Alert from './components/Alert';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import { v4 as uuidv4 } from 'uuid';

const initialExpenses = [
  {
    id: uuidv4(),
    charge: 'rent',
    amount: 1600,
  },
  {
    id: uuidv4(),
    charge: 'car payment',
    amount: 600,
  },
  {
    id: uuidv4(),
    charge: 'credit card bill',
    amount: 6000,
  },
];

// const initialExpenses = localStorage.getItem('expenses')
//   ? JSON.parse(localStorage.getItem('expenses'))
//   : [];
function App() {
  //* ******************* STATE VALUES ************
  const [expenses, setExpenses] = useState(initialExpenses);
  //Single expense
  const [charge, setCharge] = useState('');
  //single Amonut
  const [amount, setAmount] = useState('');
  //Alert
  const [alert, setAlert] = useState({ show: false });
  //Edit
  const [edit, setEdit] = useState(false);
  //edit Item
  const [id, setId] = useState(0);

  //* ******************* UseEFFECT ***************
  // useEffect(() => {
  //   localStorage.setItem('expenses', JSON.stringify(expenses));
  // }, [expenses]);
  //* ******************* Functionality ***************
  //handle charge
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  // handle amount
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  //handle alert
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };
  //Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== '' && amount > 0) {
      if (edit) {
        let tempExpenses = expenses.map((item) => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
        handleAlert({ type: 'success', text: 'Item edited' });
      } else {
        const singleExpense = { id: uuidv4(), charge, amount };
        setExpenses([...expenses, singleExpense]);
        //use handle alert succes
        handleAlert({ type: 'success', text: 'Item added' });
      }
      setCharge('');
      setAmount('');
    } else {
      // use handle alert cancelled
      handleAlert({
        type: 'danger',
        text: `Charge can't be empty value and amount has to be bigger than zero(0)`,
      });
    }
  };

  //clear all item
  const clearItems = () => {
    setExpenses([]);
    handleAlert({ type: 'danger', text: `All Item deleted` });
  };

  //Handle Delete
  const handleDelete = (id) => {
    let tempExpenses = expenses.filter((item) => item.id !== id);
    setExpenses(tempExpenses);
    handleAlert({ type: 'danger', text: `Item with ${id} deleted` });
  };

  //Handle Edit
  const handleEdit = (id) => {
    let expense = expenses.find((item) => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);

    //setExpenses([expense]);
    console.log(`Item Edited :${id}`);
  };

  return (
    <React.Fragment>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <Alert></Alert>
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <ExpenseList
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItems={clearItems}
        />
      </main>
      <h1>
        Total Spending :{' '}
        <span className="total">
          $
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </React.Fragment>
  );
}

export default App;
