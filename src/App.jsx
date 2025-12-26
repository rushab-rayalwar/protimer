import Timer from './components/timer/Timer'
import StartButton from './components/startButton/StartButton';

import { useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0);
  const [taskName, setTaskName] = useState("");

  

  return (
    <>
      <Timer time={time} taskName={taskName}/>
      <StartButton setTaskName={setTaskName}/>
    </>
  )
}

export default App
