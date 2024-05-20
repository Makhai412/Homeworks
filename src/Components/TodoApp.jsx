import { useReducer } from "react";
import { TodoReducer } from "./TodoReducer";
import { List } from "./list";
import { Addtodo } from "./addtodo";

const initialState = [{
    id: new Date().getTime(),
    description: 'Hacer log challenges',
    done: false
}]

export const TodoApp = () =>{
    const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);

    const handleNewTodo = (todo) => {
        const action={
            type:'[TODO] ADD TODO',
            payload: todo
        }
        dispatchTodo(action);
    }

    return(
        <>
            <h1><strong>TodoApp:10,</strong>  <small>Pendiente: 2</small></h1>
            <hr/>

            
            <div className="row">
                <div className="col-7">
                    <List todos={todos}/>
                </div>
                <div className="col-5">
                    <Addtodo handleNewTodo={handleNewTodo}/>
                </div>
            
            </div>
            
        </>
    )
}