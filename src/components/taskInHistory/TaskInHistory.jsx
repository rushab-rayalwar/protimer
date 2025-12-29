import styles from "./TaskInHistory.module.css";
import {motion} from "framer-motion";

function formatTime(timeInMilliseconds){
    let hours = new Date(timeInMilliseconds).getHours();
    let minutes = new Date(timeInMilliseconds).getMinutes();
    
    hours = String(hours).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");

    return `${hours}:${minutes}`
}

function formatDuration(time){

    let totalSeconds = Math.floor(time);
    let seconds = String(totalSeconds%60);

    let totalMinutes = Math.floor(totalSeconds/60);
    let minutes = String(totalMinutes%60);

    let hours = String(Math.floor(totalMinutes/60));

    return `${hours.padStart(2,"0")}:${minutes.padStart(2,"0")}:${seconds.padStart(2,"0")}`;
}

export default function TaskInHistory({historyObject}){
    return ( 
        <>
            <motion.div className={styles.taskInHistory}
            initial={{opacity:0, y:"50%"}}
            animate={{opacity:1, y:"0"}}
            transition={{duration:0.6, ease:"easeOut"}}
            >
                <div className={styles.taskName}>{historyObject.taskName}</div>

                <div className={`${styles.taskTime} ${styles.from}`}>{formatTime(historyObject.startTime)}</div>
                <div className={`${styles.taskTime} ${styles.to}`}>{formatTime(historyObject.endTime)}</div>
                <div className={`${styles.taskTime} ${styles.total}`}>{formatDuration(historyObject.time)}</div>
            </motion.div>
        </>
    )
}