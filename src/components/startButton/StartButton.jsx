import { useRef, useEffect } from "react"
import {motion} from "framer-motion"

import styles from "./StartButton.module.css";

export default function StartButton({stopTimer, startTimer, timerRunning}){
    useEffect(()=>{
        inputText.current.focus();
    },[]);

    const inputText = useRef();

    function handleStart(){
        if(inputText.current.value.trim() == "") return alert("Enter Task Name");
        startTimer(inputText.current.value);
    }
    function handleStop(){
        stopTimer();
    }

    return(
        <>
            <motion.div className={styles.startButtonContainer} layout>
                {!timerRunning && <>
                    <input ref={inputText} placeholder="New Task"></input>
                    <div className={styles.startButton} onClick={handleStart}>Start</div>
                </>}
                {timerRunning && <div className={styles.stopButton} onClick={handleStop}>Stop</div>}
            </motion.div>
        </>
    )
}