import { useState } from 'react';
import Card from './Card';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonials = (props) => {
    let reviews = props.reviews;

    let [index, setIndex] = useState(0);

    function leftShiftHandler(){
      // if the previous element of the array is -1 or less then go to the last element of the array
      if(index-1 < 0){
        setIndex(reviews.length - 1);
      }
      else{
        setIndex(index-1);
      }
    }

    function rightShiftHandler(){
      if(index+1 >= reviews.length){
        setIndex(0);
      }
      else{
        setIndex(index+1);
      }
    }

    function surpriseHandler(){
      let rand = Math.floor(Math.random()* reviews.length)
      setIndex(rand)
    }

  return (
    <div className='w-[85vw] md:w-[700px] bg-white mt-10 p-10 transition-all duration-500 rounded-md shadow-md hover:shadow-2xl'>
      <Card review = {reviews[index]}/>

        <div className=" flex text-3xl mt-10 mb-5 gap-3 justify-center font-bold text-violet-400">
          <button 
            onClick={leftShiftHandler}
            className="hover:text-violet-500 outline-none cursor-pointer">
            <FiChevronLeft/>
          </button>

          <button 
            onClick={rightShiftHandler}
            className="hover:text-violet-500 outline-none cursor-pointer">
            <FiChevronRight />
          </button>
        </div>

        <div onClick={surpriseHandler}>
          <button className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg">Surprise Me</button>
        </div>
    </div>
  )
}

export default Testimonials