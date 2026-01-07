// third party imports
import { useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";

// local imports
import styles from "./History.module.css";
import TaskInHistory from "../taskInHistory/TaskInHistory.jsx";
import { fetchHistory } from "../../redux/history/historyThunks.js";

export default function History(){
    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchHistory());
    },[dispatch]);

    let history = useSelector(state=>state.history.data);
    console.log("history-",history);
    return(
        <>
            <div className={styles.historyContainer}>
                {history.map(h=>{
                    return(
                        <TaskInHistory historyObject={h} key={h.taskName}/>
                    )
                })}
            </div>
        </>
    )
}