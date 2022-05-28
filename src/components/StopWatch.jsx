import React,{useState} from 'react'
import styles from "./stopWatch.module.css"

function msToTime(duration) {
    let milliseconds = Math.floor((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }
//   console.log(msToTime(300000))


const StopWatch = () => {
    const [timerId, setTimerId] = useState(null);
    const [watch, setWatch] = useState(0);
    const [butten, setButten] = useState(false);

    const start = () => {
        setButten(true);
        if(!timerId){
            let id = setInterval(() => {
                setWatch((prev)=>prev+10)
            },10);
            setTimerId(id);
        }
    }

    const pause = () => {
        clearInterval(timerId);
        setTimerId(null);        
    }

    const reset = () => {
        clearInterval(timerId);
        setWatch(0);
        setTimerId(null);        
    }

  return (
    <div className={styles.mainDiv}>
      <h2>StopWatch</h2>
      <h3>{msToTime(watch)}</h3>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
//style={{ display: butten ?  "none" : "block" }}
export default StopWatch;
