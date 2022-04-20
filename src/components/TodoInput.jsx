import { useState } from "react";
import Button from "./ui/Button";
// fragment -> React.Fragment -> big div
function TodoInput(props) {
  const [todoInput, setTodoInput] = useState("");
  // ถ้ามีหลาย error ใส่เป็น obj
  const [todoError, setTodoError] = useState("");

  const handleClickBtn = () => {
    // !todoInput => todoInput === ''
    if (!todoInput) {
      setTodoError("Title is required.");
    } else {
      props.createTodo(todoInput);
      // set text error to empty string (not show) when enter task
      setTodoError("");
      // set input to empty string when enter task
      setTodoInput("");
    }
  };

  return (
    <>
      {/* fragment */}
      <div className={`input-group mt-4 shadow ${!todoError ? " mb-4" : ""}`}>
        <input
          type="text"
          className={`form-control shadow-none ${
            todoError ? "is-invalid" : ""
          }`}
          placeholder="Enter new todo"
          value={todoInput}
          onChange={(event) => setTodoInput(event.target.value)} // get current value
        />

        <Button color="success" onClick={handleClickBtn}>
          <i className="fa-solid fa-plus"></i> {/*props.children */}
        </Button>
        <Button color="outline-secondary" onClick={() => setTodoInput("")}>
          <i className="fa-solid fa-x"></i> {/*props.children */}
        </Button>
      </div>
      {todoError && <small className="text-danger">{todoError}</small>}
    </>
  );
}

export default TodoInput;
