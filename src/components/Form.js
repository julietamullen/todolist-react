import React from "react";
// I need to import here all the info from the states that I'm gonna use
const Form = ({inputText, setInputText, todos, setTodos, setStatus }) => {
    const handleInputText = (e) => {
        // {setInputText} is now a variable that I can use wherever I want, in this case it changes everythime I write
        setInputText(e.target.value);
    };
    const handleSubmitTodo = (e) => {
        e.preventDefault();
        // Every todo will be an object with the text, completed and id attributes.
        if({inputText}.inputText != "" && {inputText}.inputText.trim() != "") {
            setTodos([...todos, {text: inputText, completed: false, id: Math.random()*1000}])
            setInputText("");}
    };
    const handleStatus = (e) => {
        setStatus(e.target.value)
    }
    return (
        <form>
        <div className="add-todo">
            <input
            value = {inputText}
            onChange={handleInputText}
            type="text"
            className="todo-input"
            placeholder="What do you need to do?"
            />
            <button
            onClick={handleSubmitTodo}
            className="todo-button"
            type="submit"
            >
            <i className="fas fa-plus"></i>
            </button>
        </div>
        <div onChange= {handleStatus} className="select">
            <select name="todos" className="filter-todos">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
        </form>
    );
};

export default Form;
