import React, { useRef, useState } from 'react'


const Challenge = ({title,targetTime}) => {
    const timer= useRef()
    const [timerExpired,settimerExpired]=useState(false)
    const [starttimer,setstartTimer]=useState(false)
    const handlestartTimer=()=>{
        timer.current=setTimeout(()=>{
            settimerExpired(true)
        }, targetTime * 1000)
        setstartTimer(true)
    }

    const handleStoptimer=()=>{
        console.log('stopper')
        clearTimeout(timer.current)
    }

  return (
    <section className='challenge'>
        {title}
        {timerExpired ? <p>You Loast!</p>:''}
        <p>{targetTime} second{targetTime > 1 ? 's':''}</p>
        <p>
            <button onClick={starttimer ? handleStoptimer : handlestartTimer}>{starttimer?'Stop':'Start'}</button>
        </p>
        <p>
            {starttimer?'Time is running...':'Timer inactive'}
        </p>
    </section>
  )
}

export default Challenge