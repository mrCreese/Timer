import React from 'react';
import './Timer.css';

const Timer = ({ isCounting,timeRemaining }) => {
    let hours = Math.floor(timeRemaining/3600)
    let minutes =Math.floor((timeRemaining-hours*3600) /60)
    let seconds = Math.floor(timeRemaining - hours *3600 - minutes*60)
    return (
        <div className={`${'time__container'} ${ isCounting && seconds % 2 === 0 ? 'set_border': ''} ${!isCounting && seconds === 0 ? 'stop_timer' :''}`}>
            <div className='time__parts'>
                <p>{`${hours > 0
                    ? hours < 10 ? '0' + hours : hours
                    : '00'}`}</p>
                <span>:</span>
                <p>{minutes > 0
                    ? minutes < 10 ? '0' + minutes : minutes
                    : '00'}</p>
                <span>:</span>
                <p>{seconds > 0
                    ? seconds < 10 ? '0' + seconds : seconds
                    : '00'}</p>
            </div>
        </div>
    )
}

export default Timer