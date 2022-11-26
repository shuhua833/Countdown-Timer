
// The clock should take time in seconds and should do a countdown until it hit's zero and when it hits zero I want to see a generic message like Timer Expired or anything
// I want to see the countdown logic implemented inside it's own customHook

import './App.css';
import {   useEffect, useState} from "react";
import useFetch from "./hooks/useFetch";
function App(){
  const [inputValue, setInputValue] = useFetch();

  return (
    <>
      <input
      placeholder='Enter time in seconds'
        type="text"
        value={inputValue}
       onChange={(e)=>setInputValue(e.target.value)} 
      />
      
      <div>{inputValue}</div>
    </>
  );
}

export default App;
