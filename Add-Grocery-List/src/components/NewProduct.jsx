import React from 'react';
import '../styles/NewProduct.css';
import ProductFrom from './ProductFrom';

function NewProduct({ onAddProduct }) {
  return (
    <div className='new-product'>
      <ProductFrom onAddProduct={onAddProduct} />
    </div>
  );
}

export default NewProduct;
