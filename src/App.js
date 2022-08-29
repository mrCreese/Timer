import { useEffect, useState } from 'react';

import Buttons from './components/Buttons';
import Input from './components/Input';
import Timer from './components/Timer';


import './App.css';




function App() {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [isCounting, setIsCounting] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      isCounting && setTimeRemaining((timeRemaining) => (timeRemaining >= 1 ? timeRemaining - 1 : 0))

    }, 1000);
    if (timeRemaining === 0) setIsCounting(false)
    return () => {
      clearInterval(interval)
    };
  }, [isCounting, timeRemaining])


  const handleStart = () => {
    setTimeRemaining(hours * 3600 + minutes * 60 + seconds * 1)
    setIsCounting(true)

  }

  const handleStop = () => {
    setIsCounting(false)
  }

  const handleChange1 = (e) => {

    setHours(e.target.value)

  }
  const handleChange2 = (e) => {
    setMinutes(e.target.value)

  }
  const handleChange3 = (e) => {
    setSeconds(e.target.value)

  }

  const resetTimer = () => {
    setHours('')
    setMinutes('')
    setSeconds('')
    setTimeRemaining('')
  }

  return (
    <div className="App">
      <Timer
        timeRemaining={timeRemaining}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        isCounting={isCounting}
      />
      <Buttons
        handleStop={handleStop}
        resetTimer={resetTimer}
        handleStart={handleStart}
      />
      <p className='indicator'>Set the timer</p>
      <Input
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        handleChange1={handleChange1}
        handleChange2={handleChange2}
        handleChange3={handleChange3}
      />
    </div>
  );
}

export default App;
