import React, { useState } from "react";

function Slides({ slides }) {
const firstSlide={...slides[0]};
const slideLength=slides.length;
  const [currentSlide,setCurrentSlide]=useState({...firstSlide});
const [count,setCount]=useState(0);
const handleReset=()=>{

  setCurrentSlide({...firstSlide});
  setCount(0);
}
const handleNext=()=>{
setCurrentSlide({...slides[count+1]});
setCount(prevCount=>prevCount+1);

}

const handlePrev=()=>{
  setCurrentSlide({...slides[count-1]});
  setCount(prevCount=>prevCount-1);
}
  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="small outlined" onClick={handleReset} disabled={count===0}>
          Restart
        </button>
        <button data-testid="button-prev" className="small" onClick={handlePrev} disabled={count===0}>
          Prev
        </button>
        <button data-testid="button-next" className="small" onClick={handleNext} disabled={(slideLength-1)===count}>
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{currentSlide.title}</h1>
        <p data-testid="text">{currentSlide.text}</p>
      </div>
    </div>
  );
}

export default Slides;
