import {useState } from "react";

export const useCounter= (sum) =>{
    const [counter, setCounter]= useState(sum);

    const valueAdd =()=>{
        setCounter(counter+1);
        console.log(valueAdd)
    }
    const valueDecrement =()=>{
        setCounter(counter -1);
    }
    const valueReset =()=>{
        setCounter(sum);
    }
    
    return {counter, valueAdd, valueDecrement, valueReset};
    
}