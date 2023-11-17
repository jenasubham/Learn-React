
import { useState } from 'react'

function App() {
  const [color, setColor ] = useState('white');
  return (
    <>
      <div className="w-full h-screen duration-200" style = {{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-10 px-2 py-2 gap-4 inset-x-0'>
          <div className='bg-white flex justify-center gap-4 shadow-lg  px-3 py-2 rounded-3xl'>
            <button className='px-4 py-2 rounded-full text-white bg-red-500 font-semibold' onClick={()=>setColor("#FF5764")}>Red</button>          
            <button className='px-4 py-2 rounded-full text-white bg-green-500 font-semibold' onClick={()=>setColor("#00DE8A")}>Green</button>
            <button className='px-4 py-2 rounded-full text-white bg-blue-500 font-semibold'  onClick={()=>setColor("#009DF9")}>Blue</button>
            <button className='px-4 py-2 rounded-full text-black bg-yellow-300 font-semibold' onClick={()=>setColor("#FFDD47")}>yellow</button>
            <button className='px-4 py-2 rounded-full text-black bg-gray-300 font-semibold' onClick={()=>setColor("#C2C1BC")}>Gray</button>
            <button className='px-4 py-2 rounded-full text-black bg-white font-semibold' onClick={()=>setColor("white")}>White</button>
          </div>
        </div>
        </div>
    </>
  )
}
export default App
