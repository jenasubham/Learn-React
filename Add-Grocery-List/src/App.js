import './App.css';
import Products from './components/Products';
import NewProduct from './components/NewProduct';
import { useState } from 'react';
function App() {

  const list = [

    {
      id:'p1',
      title: 'Moov Spray',
      amount: 200,
      date: new Date(2021,8,10)
    },
    {
      id:'p2',
      title: 'Face Wash',
      amount: 90,
      date: new Date(2021,2,22)
    },
    {
      id:'p3',
      title: 'Washing Liquid',
      amount: 45,
      date: new Date(2021,5,19)
    },
    {
      id:'p4',
      title: 'Saboon',
      amount: 155,
      date: new Date(2020,3,12)
    }
  ];

 const [ data, setData] = useState(list);

 const addNewProduct = (newProduct) =>{
   setData([...data,newProduct])
   console.log(data);
 }

  return (
    <>
    <NewProduct onAddProduct = {addNewProduct} />
    <Products items = {data}/>
    </>
  );
}

export default App;
