import styles from "./history.module.css";
import TaskInHistory from "../taskInHistory/TaskInHistory";
import { AnimatePresence } from "framer-motion";

export default function History({history}){
    console.log(history);
    return(
        <>
            <div className={styles.historyContainer}>
                {history.map(h=>{
                    return(
                        <AnimatePresence>
                            <TaskInHistory historyObject={h} key={h.taskName}/>
                        </AnimatePresence>
                    )
                })}
            </div>
        </>
    )
}