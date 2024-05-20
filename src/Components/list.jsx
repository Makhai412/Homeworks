import { TodoItem } from "./todoItem"

export const List = ({todos = []}) => {
  return (
    <>
      <ul className="list-group">
      {todos.map((todo, key)=>{
        return( 
          <TodoItem key={key} todo={todo}/>
            ) 
          })
        }  
      </ul>
    </>
  )
}

