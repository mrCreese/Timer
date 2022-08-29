import React from 'react';
import './Buttons.css';

const Buttons = ({resetTimer, handleStart, handleStop}) => {
  return (
    <div className='buttons'>
        <button onClick={resetTimer}>Reset</button>
        <button onClick={handleStart} >Start</button>
        <button onClick={handleStop} >Stop</button>
    </div>
  )
}

export default Buttons