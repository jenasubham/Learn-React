import React, { useState } from 'react';

function ProductFrom({ onAddProduct }) {
  const [newTitle, setNewTitle] = useState('');
  const [newDate, setNewDate] = useState('');

  function titleChangeHandler(event) {
    setNewTitle(event.target.value);
  }

  function dateChangeHandler(event) {
    setNewDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const newAddedData = {
      id: 'p5',
      title: newTitle,
      amount: 155,
      date: new Date(newDate),
    };

    onAddProduct(newAddedData);
    // Reset the form fields
    setNewTitle('');
    setNewDate('');
  }

  

  return (
    <form onSubmit={submitHandler}>
      <div className='new-product_title'>
        <label>Title</label>
        <input type='text' value={newTitle} onChange={titleChangeHandler} />
      </div>
      <div className='new-product_date'>
        <label>Date</label>
        <input
          type='date'
          value={newDate}
          onChange={dateChangeHandler}
          max='2023-12-12'
          min='2000-01-01'
        />
      </div>
      <div className='new-product_button'>
        <button type='submit'>Add Product</button>
      </div>
    </form>
  );
}

export default ProductFrom;
