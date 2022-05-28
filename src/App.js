import React,{useState} from 'react'
import StopWatch from './components/StopWatch';
// import Timer from './components/Timer';
import './App.css';
import Todos from "./components/Todos";
// import Try from './components/Try';

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      {/* <Todos/> */}
      {/* <Timer />       */}
      <StopWatch/>
    </div>
  )
}

export default App;
