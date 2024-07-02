import React,{useState } from 'react'

const StateDemo = () => {
    let [num, setNumber]= useState(1000);
    const halfHandler=() =>{
        setNumber(num+1);
    }
    const halfHandlers=() =>{
        setNumber(num-1);
    }
  return (
    <>
        <p>{num}</p>
        <button onClick={halfHandler}>half the number</button>
        <button onClick={halfHandlers}>half the number</button>

    </>
    
  )
}

export default StateDemo