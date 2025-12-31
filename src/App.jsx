  import Timer from './components/timer/Timer'
  import StartButton from './components/startButton/StartButton'
  import History from "./components/history/History"

  import { useState, useEffect, useRef } from 'react';
  // import { useDispatch } from 'react-redux';
  // import { addToHistory } from './redux/historySlice';
  import './App.css'

  function App() {
    const [time, setTime] = useState(0); // time in seconds
    const [taskName, setTaskName] = useState("");
    const [timerRunning, setTimerRunning] = useState(false);
    const [history, setHistory] = useState([]);

    let startTime = useRef();
    let intervalRef = useRef();
    // const dispatch = useDispatch();
    
    function startTimer(input){
      startTime.current = Date.now();
      setTimerRunning(true);
      setTaskName(input.trim().toUpperCase());

      intervalRef.current = setInterval(()=>{
        let timeElapsed = Date.now() - startTime.current;
        timeElapsed = Math.floor(timeElapsed/1000);
        setTime(timeElapsed);
      },1000);
    }
    function stopTimer(){
      clearInterval(intervalRef.current);
      setHistory(prevHistory => [...prevHistory, {time, startTime: startTime.current, endTime: Date.now(), taskName}]);
      // dispatch(addToHistory());
      setTime(0);
      setTimerRunning(false);
      setTaskName("");
    }

    return (
      <>
        <Timer time={time} taskName={taskName}/>
        <StartButton startTimer={startTimer} timerRunning={timerRunning} stopTimer={stopTimer}/>
        <History history={history}/>
      </>
    )
  }

  export default App;