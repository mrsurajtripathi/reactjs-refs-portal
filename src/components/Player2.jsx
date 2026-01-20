import React, { useRef, useState } from 'react'

export const Player2 = () => {
    const playerRef=useRef()
    const playerRef2=useRef()
    const [name,setName]=useState(null)

    const handleSubmit=()=>{
        playerRef2.current.click()
        setName(playerRef.current.value);
    }

  return (
    <>
     <section id="player">
        <h2>Welcome {name ?? 'unknown entity'}</h2>
        <p>
          <input type="text" ref={playerRef}/>
          <input type="file" ref={playerRef2}/>
          <button onClick={handleSubmit}>Set Name</button>
        </p>
      </section>
    </>
  )
}
