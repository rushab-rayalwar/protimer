import {motion, AnimatePresence} from "framer-motion";

import styles from "./Timer.module.css";

function formatTime(time){

    let totalSeconds = Math.floor(time);
    let seconds = String(totalSeconds%60);

    let totalMinutes = Math.floor(totalSeconds/60);
    let minutes = String(totalMinutes%60);

    let hours = String(Math.floor(totalMinutes/60));

    return `${hours.padStart(2,"0")}:${minutes.padStart(2,"0")}:${seconds.padStart(2,"0")}`;
}

export default function Timer({taskName, time}){
    
    let formattedTaskName = taskName.trim().toUpperCase();

    return (
        <>
            <div className={styles.timerContainer}>
                <AnimatePresence>
                    {formattedTaskName && <motion.div className={styles.taskName}
                    initial={{y:"-40%", x:"50%", opacity:0}}
                    animate={{y:"0", x:"50%", opacity:1}}
                    transition={{duration:0.3, ease:"easeOut"}}
                    >
                        {formattedTaskName}
                    </motion.div>}
                </AnimatePresence>
                <div className={styles.time}>
                    {formatTime(time)}
                </div>
            </div>
        </>
    )
}