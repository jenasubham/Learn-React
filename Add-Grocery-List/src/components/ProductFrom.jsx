import React, { useState } from 'react'

function ProductFrom() {
  const[Newtitle,setTitle] = useState('')
  const[Newdate,setDate] = useState('')

  function titleChangeHandler(event){
    setTitle(event.target.value);
  }
  function dateChangeHandler(event){
    setDate(event.target.value);
  }

  function submitHandler(event){
    event.preventDefault();

    const productData = {
      title:Newtitle,
      date:Newdate
    }
    console.log(productData);
    setTitle('');
    setDate('');
  }
  return (
    <form onSubmit={submitHandler}>
        <div className='new-product_title'>
            <label>Title</label>
            <input type="text" value = {Newtitle} onChange={titleChangeHandler}/>
        </div>
        <div className='new-product_date'>
            <label>Date</label>
            <input type="date" value = {Newdate} onChange={dateChangeHandler} max='2023-12-12' min= '2000-01-01'/>
        </div>
        <div className='new-product_button'>
            <button type="submit">Add Product</button>
        </div>
    </form>
  )
}

export default ProductFrom