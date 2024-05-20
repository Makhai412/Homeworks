export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
    return (
        <li className='list-group-item flex justify-between items-center'>
            <span 
                className={`align-self-center ${todo.done ? 'completed' : ''}`}
                onClick={() => onToggleTodo(todo.id)}
                style={{ cursor: 'pointer' }}
            >
                {todo.description}
            </span>
            <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>Borrar</button>
        </li>
    );
};
