import { useRef } from "react";

import styles from "./StartButton.module.css";

export default function StartButton({setTaskName}){
    const inputText = useRef();
    function updateTaskName(){
        setTaskName(inputText.current.value);
    }
    return(
        <>
            <div className={styles.startButtonContainer}>
                <input ref={inputText} onChange={updateTaskName} placeholder="New Task"></input>
            </div>
        </>
    )
}