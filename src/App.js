import "./styles/App.css";
import Header from "./components/Header";
import {useState} from "react";
import Todolist from "./components/Todolist";
import TodoForm from "./components/TodoForm";

function App() {

  let [todolist,setTodolist] = useState([]);

  const handleToggle = (id) => {
    let mapped = todolist.map((task) => {
      return task.id === Number(id) ? {...task,complete:!task.complete} : {...task}; 
    })
    setTodolist(mapped);
  }

  const handleFilter = () => {
    let filtered = todolist.filter((task) => {
      return !task.complete;
    })
    setTodolist(filtered);
  }

  const addTask = (inp) => {
      let copy = [...todolist];
      copy = [...copy, {id:todolist.length+1,task:inp,complete:false}]
      setTodolist(copy);
  }

  return (
    <div className="App">
      <Header/>
      <Todolist todolist = {todolist} handleToggle = {handleToggle} handleFilter = {handleFilter}/><br/>
      <TodoForm addTask = {addTask}></TodoForm>
    </div>
  );
}

export default App;
