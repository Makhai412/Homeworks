
import { useRef } from "react"

export const Addtodo = ({handleNewTodo}) => {
  
  const valueInput= useRef();
  const onFormSubmit=(evt)=>{
    evt.preventDefault()
    const newTodo={
      id: new Date().getTime(),
      description:valueInput.current.value,
      done: false
    }
    handleNewTodo(newTodo);
    valueInput.current.value="";
    
        
  }
  return (
    <form onSubmit={(evt)=> onFormSubmit(evt)}>
      <input type="text" className="form-control" ref={valueInput} placeholder="Tarea"/>
      <button type= "submit" className="btn btn-outline-primary mt1">
        Agregar
      </button>
    </form>
    
  )
}

