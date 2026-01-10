  import Timer from './components/timer/Timer'
  import StartButton from './components/startButton/StartButton'
  import History from "./components/history/History"
  import { useDispatch } from 'react-redux';

  import { useState, useEffect, useRef } from 'react';
  import { addTaskOptimistic } from './redux/history/historySlice.js';
  import {addHistory} from "./redux/history/historyThunks.js";
  import './App.css'

  function App() {
    const [time, setTime] = useState(0); // time in seconds
    const [taskName, setTaskName] = useState("");
    const [timerRunning, setTimerRunning] = useState(false);
    // const [history, setHistory] = useState([]);

    let startTime = useRef();
    let intervalRef = useRef();
    let tempId = useRef(0); // Stores temporary id for optimistic history objects. This id get replaced witht the real object id stored at the database after the backend responds to the addTask request
    const dispatch = useDispatch();
    
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

      let newHistoryObject = {duration:time, startTime: startTime.current, endTime: Date.now(), taskName};
      dispatch(addTaskOptimistic({...newHistoryObject, optimistic:true, _id:tempId.current}));

      dispatch(addHistory({newHistoryObject, tempId:tempId.current})) // NOTE THIS : passing the tempId here is important so as to indentify which optimistic object from the state / slice needs to be replaced witht the object returned by the backend after updating the DB
      tempId.current++;

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