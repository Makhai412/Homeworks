import './App';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useCounter } from './hooks/customHook';


const FirstApp = ({sum})=>{
  
  const {counter, valueAdd, valueDecrement, valueReset } = useCounter(sum);
    return(
    <>
    <h1>Counter</h1>
    <span>{counter}</span>
    <button id="botonSumar" onClick={()=> valueAdd()}> +1 </button>
    <button id="botonRestar" onClick={()=> valueDecrement()}> -1 </button>
    <button id="botonResetear" onClick={()=> valueReset()}> Reset </button>
    </> 
    )
  

}

/** 
const FirstApp =(props)=>{
  return(
      <>
      <h1>{props.title}</h1>
      <span>10</span>
      </>
  )
}
*/
FirstApp.propTypes ={
  title: PropTypes.string.isRequired,
  sum: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
  title: 'No Hay Titulo',
  sum: 300
}

  
export default FirstApp;

