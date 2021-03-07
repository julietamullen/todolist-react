import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
    console.log(todos)
  // Events
    const handleDelete = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    };
    const handleChecked = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }return item
        }))
    }
    return (
        <div className="todo-div">
        <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
        <button className="checked" onClick={handleChecked}>
            <i className="fas fa-check"></i>
        </button>
        <button className="delete" onClick={handleDelete}>
            <i className="far fa-trash-alt"></i>
        </button>
        </div>
    );
};

export default Todo;
