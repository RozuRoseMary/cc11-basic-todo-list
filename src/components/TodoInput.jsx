import { createContext, useContext, useState } from "react";
import Button from "./ui/Button";
import { TodoContext } from "../context/TodoContext";

function TodoInput() {
  const { id, completed, title, createTodo, updateTodo, closeEditing } =
    useContext(TodoContext);

  const [todoInput, setTodoInput] = useState(title || "");
  const [todoError, setTodoError] = useState("");

  // const ctx = useContext(TodoContext);

  function handleClickBtn(props) {
    if (!todoInput) {
      setTodoError("Title is required.");
    } else {
      createTodo(todoInput);
      setTodoError("");
      setTodoInput("");
    }
  }

  function handleClickUpdateBtn() {
    if (!todoInput) {
      setTodoError("Title is require");
    } else {
      updateTodo({ title: todoInput, completed: props.completed }, props.id);
      closeEditing();
    }
  }

  return (
    <>
      <div className={`input-group mt-4 shadow ${!todoError ? " mb-4" : ""}`}>
        <input
          type="text"
          className={`form-control shadow-none ${
            todoError ? "is-invalid" : ""
          }`}
          placeholder="Enter new todo"
          value={todoInput}
          onChange={(event) => setTodoInput(event.target.value)}
        />

        {id ? (
          <Button color="primary" onClick={handleClickUpdateBtn}>
            <i className="fa-solid fa-check"></i>
          </Button>
        ) : (
          <Button color="success" onClick={handleClickBtn}>
            {<i className="fa-solid fa-plus"></i>}
          </Button>
        )}

        <Button
          color="outline-secondary"
          onClick={() => {
            if (id) {
              closeEditing();
            } else {
              setTodoInput("");
            }
          }}
        >
          <i className="fa-solid fa-x"></i>
        </Button>
      </div>
      {todoError && <small className="text-danger">{todoError}</small>}
    </>
  );
}

export default TodoInput;
