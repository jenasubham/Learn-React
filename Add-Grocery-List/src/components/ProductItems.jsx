import React,{useState} from 'react'
import ProductDate from './ProductDate'
import '../styles/ProductItems.css'


function ProductItems(props) {
  const [title, setTitle] = useState(props.title)

  const clickHandler = (i) => {
    setTitle("Ordered");
  }
  
  return (
    <div> 
      <div className= 'product-item'>
        <ProductDate date = {props.date}/>
        <div className='product-item_description'>
          <h2>{title}</h2>
        </div>
        <button onClick={()=>clickHandler(props.index)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductItems 