import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Player from './components/Player'
import { Player2 } from './components/Player2'
import Challenge from './components/Challenge'

function App() {

  return (
    <>
      <Player/> //problem is with for a single imput boc change we are writing a lot of code
      {/* <Player2/> */}
      <div id="challenges">
      <Challenge title='Easy' targetTime="1" />
      <Challenge title='Not Easy' targetTime="5" />
      <Challenge title='Pro' targetTime="10" />
      <Challenge title='Harder' targetTime="15" />
      </div>
    </>
  )
}

export default App
