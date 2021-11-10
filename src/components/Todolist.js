import Todo from "./Todo";

function Todolist(props){
    return (
        <div>
            {props.todolist.map((singleTodo) => {
                return (
                    <Todo todo = {singleTodo} Toggle = {props.handleToggle} handleFilter = {props.handleFilter}></Todo>
                );
            })}<br/>
            <button onClick = {props.handleFilter} >Clear Completed</button>
        </div>
    );
}

export default Todolist;