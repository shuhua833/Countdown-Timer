import { useState ,useEffect} from "react";

const useCounter = () =>{
        const [inputValue, setInputValue] = useState(null);
      
      useEffect(()=>{
        inputValue > 0 && setTimeout(() => setInputValue(inputValue - 1), 1000);  
      },[inputValue])  //change in [inputValue] triggers the useEffect hook

    return[inputValue, setInputValue]
}
export default useCounter;
