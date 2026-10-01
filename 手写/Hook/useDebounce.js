const { useState, useEffect } = require("react");

function useDebounce(value,delay){
  const [debounceValue,setDebounceValue] = useState(value)

  useEffect(()=>{
    let timer = setTimeout(()=>{
      setDebounceValue(value)
    },delay)

    return ()=>{
      clearTimeout(timer)
    }
  },[value,delay])

  return debounceValue
}