import React from 'react'
// import Card from './Card'
import ProductItems from './ProductItems'
import '../styles/Products.css'


function Products({items}) {
  return (
    <div className="products">
      {
      items.map((item,index) => {
        return <ProductItems key ={item.id} index = {index} title = {item.title} amount = {item.amount} date= {item.date} />
      })
      }
    </div>  
    )
}

export default Products