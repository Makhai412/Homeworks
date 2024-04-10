import './App';
import PropTypes from 'prop-types';
import { useState } from 'react';


const FirstApp = ({title, sum})=>{
  const [counter, setCounter]= useState(sum);

  const handleAdd =()=>{
    setCounter(counter +1)
  }
  const handleSubstract= () =>{
    setCounter(counter-1);
  }
  const handleReset = () =>{
    setCounter(sum)
  }
    return(
    <>
    <h1>Counter</h1>
    <span>{counter}</span>
    <button id="botonSumar" onClick={()=> handleAdd()}> +1 </button>
    <button id="botonRestar" onClick={()=> handleSubstract()}> -1 </button>
    <button id="botonResetear" onClick={()=> handleReset()}> Reset </button>
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

