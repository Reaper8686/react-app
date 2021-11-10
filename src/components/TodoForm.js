import { useState } from "react";

function TodoForm(props){
    
    let [inputValue,setInputValue] = useState("");

    const handleInput = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask(inputValue);
        setInputValue("")
    }

    return (
        <div>
            <form onSubmit = {handleSubmit}>
                <input type="text" value={inputValue} onChange={handleInput} /><br/>
                <button>ADD</button>
            </form>
        </div>
    );
}
export default TodoForm;