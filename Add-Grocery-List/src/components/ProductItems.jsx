import React,{useState} from 'react'
import Card from './Card'
import ProductDate from './ProductDate'
import '../styles/ProductItems.css'


function ProductItems(props) {
  const [title, setTitle] = useState(props.title)

  const clickHandler = () => {
    setTitle("Ordered")
  }
  return (
    <Card>
      <div className= 'product-item'>
        <ProductDate date = {props.date}/>
        <div className='product-item_description'>
          <h2>{title}</h2>
        </div>
        <button onClick={clickHandler}>Add to Cart</button>
      </div>
    </Card>
  )
}

export default ProductItems 