import React from 'react';
import './Input.css';


const Input = ({ hours, minutes, seconds, handleChange1, handleChange2, handleChange3 }) => {
  return (
    <div className='input__container'>
      <input placeholder='hours' type='number' onChange={handleChange1} value={hours} />
      <input placeholder='minutes' type='number' onChange={handleChange2} value={minutes} />
      <input placeholder='seconds' type='number' onChange={handleChange3} value={seconds} />
    </div>
  )
}

export default Input