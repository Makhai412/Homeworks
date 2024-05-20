import { useRef } from "react"

export const Addtodo = ({handleNewTodo}) => {
  

  const valueInput= useRef();
  const onFormSubmit=(evt)=>{
  const todoDescription = valueInput.current.value.trim();
    evt.preventDefault()
    if (todoDescription !== "") {
      const newTodo = {
        id: new Date().getTime(),
        description: todoDescription,
        done: false
      };
    handleNewTodo(newTodo);
    valueInput.current.value="";
    
    }     
  }
  return (
    <div className="flex items-center justify-center mt-8">
      <form onSubmit={(evt) => onFormSubmit(evt)} className="w-full max-w-xs">
        <div className="flex items-center  border-b-2 border-blue-500 py-2">
          <input type="text" className="appearance-none bg-transparent border-b-2 border-gray-400 border-none bg-white dark:bg-black-800 w-48 text-black dark:text-white mr-3 py-1 px-1 leading-tight focus:outline-none"
            ref={valueInput} placeholder="Tarea"/>
          <button type="submit" className="bg-red-500 border-red-500 hover:bg-red-700 hover:border-red-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline">
            Agregar
          </button>
        </div>
      </form>
    </div>
    
  )
}

