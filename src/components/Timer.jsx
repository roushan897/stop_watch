import React,{useEffect, useState} from 'react'

const Timer = () => {
    const [timer, setTimer] = useState(1);
    const [input, setInput] = useState(0);
    const [getTime, setGetTime] = useState(0);
    // console.log(getTime,input)

    useEffect(() => {
        const id = setInterval(() => {
             if(timer>=getTime){
                 clearInterval(id);
             }else{
                // setTimer((prev)=>setTimer(prev-1))
                setTimer(timer+1)
             }
        },1000);

        return () => {
            console.log("return function to clear id(cleanup function)");
            clearInterval(id);
        }
    }, [timer,getTime])

  return (
    <div>
      <p>✍️Write your Stop time</p> 
      <input type="number" onChange={(e)=>setInput(e.target.value)} placeholder="Stop time here..."/>
      <button onClick={()=> input<100 ? setGetTime(Number(input)) : alert("please fill time less than 100")}>Submit</button>
      <div>Count Down: {timer}</div>
    </div>
  )
}

export default Timer;
