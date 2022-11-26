import './App.css';
import {   useEffect, useState} from "react";

import useCounter from './hooks/useCounter';
function App(){
  const [inputValue, setInputValue] = useCounter();

  return (
    <>
      <input
      placeholder='Enter time in seconds'
        type="text"
        value={inputValue}
       onChange={(e)=>setInputValue(e.target.value)} 
      />  
      <div>{inputValue}</div>
      {inputValue===0?<div>Timer expired</div>:<></>}
    </>
  );
}

export default App;
