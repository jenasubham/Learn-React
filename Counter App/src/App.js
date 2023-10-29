import { useState } from 'react';
import './App.css';

function App() {

  const[counter,setCount] = useState(0);

  const decreaseHandler =()=>{
    if (counter>0) {
      setCount(counter-1);
    }
  }

  const increaseHandler = () =>{
    if(counter < 20){
    setCount(counter+1);
    }
  }

  const resetHandler=() =>{
    setCount(0);
  }


  return (
    <>
    <div className='home'>
      <div className= 'title'>
        Increment & Decrement
      </div>

      <div className='counter-main'>
        <button onClick={decreaseHandler} className='minus'>
          -
        </button>
        <div className='counter'>
          {counter}
        </div>
        <button onClick={increaseHandler} className='plus'>
          +
        </button>
      </div>
           
        <button onClick={resetHandler} className='reset'>
          Reset
        </button>
      
    </div>
    </>
  );
}

export default App;
