import styles from "./history.module.css";
import TaskInHistory from "../taskInHistory/TaskInHistory";

import {motion, AnimatePresence} from "framer-motion";

export default function History({history}){
    return(
        <>
            <motion.div className={styles.historyContainer} layout>
                {history.map(h=>{
                    return(
                        <TaskInHistory historyObject={h} key={h.taskName}/>
                    )
                })}
            </motion.div>
        </>
    )
}