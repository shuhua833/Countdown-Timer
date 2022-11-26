import { useState ,useEffect} from "react";

const useFetch = () =>{
        const [inputValue, setInputValue] = useState("");
      
      useEffect(()=>{
        inputValue > 0 && setTimeout(() => setInputValue(inputValue - 1), 1000);  
      },[inputValue])  //change in [inputValue] triggers the useEffect hook

    return[inputValue, setInputValue]
}
export default useFetch;
