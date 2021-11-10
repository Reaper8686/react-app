import "./styles/Todo.css"

function Todo(props){

    const handleClick = (e) => {
        e.preventDefault();
        props.Toggle(e.target.id)

    }

    return (
        <div>
            <div id={props.todo.id} onDoubleClick = {handleClick} className={props.todo.complete ? "strike":""}>
                {props.todo.task}
            </div>
        </div>
        
    );
}

export default Todo;