import React from 'react'
import '../styles/ProductDate.css'
function ProductDate(props) {
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});
  return (
    <div className='product-date'>
        <div className='product-date_month'>{month}</div>
        <div className='product-date_year'>{year}</div>
        <div className='product-date_day'>{day}</div>
    </div>
  )
}

export default ProductDate