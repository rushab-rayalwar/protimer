import styles from "./TaskInHistory.module.css"

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
    historyObject.startTime = formatTime(historyObject.startTime);
    historyObject.endTime = formatTime(historyObject.endTime);
    historyObject.time = formatDuration(historyObject.time);
    return ( 
        <>
            <div className={styles.taskInHistory}>
                <div className={styles.taskName}>{historyObject.taskName}</div>

                <div className={`${styles.taskTime} ${styles.from}`}>{historyObject.startTime}</div>
                <div className={`${styles.taskTime} ${styles.to}`}>{historyObject.endTime}</div>
                <div className={`${styles.taskTime} ${styles.total}`}>{historyObject.time}</div>
            </div>
        </>
    )
}