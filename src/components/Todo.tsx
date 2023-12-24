
function Todo(props:{todo:any, removeTodo:any, completeTodo:any}){
    return(
      <div className="todo" style={{textDecoration: props.todo.isCompleted ? "line-through": ""}}>
        <div className='content'>
          <p>{props.todo.text}</p>
          <p className='category'>{props.todo.category}</p>
        </div>
        <div>
          <button className="complete" onClick={() => props.completeTodo(todo.id)}>Completar</button>
          <button className="remove" onClick={() => props.removeTodo(todo.id)}>X</button>
        </div>
      </div>
    )
}

export default Todo