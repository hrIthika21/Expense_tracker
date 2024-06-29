import React from 'react';
import './expense_tracker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


function ExpenseList({ expenses,removeExpense,onEditExpense, 
    editIndex, 
    newItem, 
    newCost, 
    setNewItem, 
    setNewCost, 
    saveExpense }){

    const totalExpense = expenses.reduce((total, expense) => total + parseFloat(expense.cost), 0);

    return (
    <div>
      <h2>Your daily expenses :</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {editIndex==index?(
                <>
                <span id="date">{expense.d}</span>
                <div className="togethe">
                    <input 
                        type="text" 
                        value={newItem} 
                        onChange={(e) => setNewItem(e.target.value)} 
                        className="expense-item-input"
                    />
                    <input 
                        type="text" 
                        value={newCost} 
                        onChange={(e) => setNewCost(e.target.value)} 
                        className="expense-cost-input"
                    />
                </div>
                <div className="save">
                    <button onClick={saveExpense}>Save</button>
                </div>
              </>
            ):(
                <>
                    <div className="up">
                        <span id="date">{expense.d}</span>
                        <FontAwesomeIcon icon={faTrash} className='trash' onClick={() => removeExpense(index)}/>
                    </div>
                    <div className="together">
                        <span id='item'>{expense.item}</span><span id='cost'>₹ {expense.cost}</span>
                    </div>
                    <div className="button"><button className='edit' onClick={() => onEditExpense(index)}>EDIT</button></div>
                </>
            )
            }
          </li>
        ))}
      </ul>
      <div className="total-expense">
        <div>Total Expense: <div>₹ {totalExpense.toFixed(2)}</div></div>
      </div>
    </div>
  );
}

export default ExpenseList;
