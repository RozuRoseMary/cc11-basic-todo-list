import { useState } from "react";
import Button from "../ui/Button";
import TodoInput from "../TodoInput";

function Todo(props) {
  // App
  const { title, completed, id, removeTodo, updateTodo } = props;

  // show list task || edit title
  const [isEditing, setIsEditing] = useState(false);

  function closeEditing() {
    setIsEditing(false);
  }

  return (
    <li
      className={`list-group-item d-flex ${
        isEditing ? "flex-column" : "align-items-center"
      } p-3 bd-callout bd-callout-${completed ? "success" : "warning"}`}
    >
      {isEditing ? (
        <TodoInput
          id={id}
          title={title}
          closeEditing={closeEditing}
          updateTodo={props.updateTodo}
        />
      ) : (
        <>
          <span
            className="flex-grow-1"
            role="button"
            onClick={() => setIsEditing(true)}
          >
            {title}
          </span>
          <div className="btn-group" role="button">
            <Button
              color="outline-info"
              onClick={() => updateTodo({ completed: !completed }, id)}
            >
              <i
                className={`fa-solid fa-toggle-${completed ? "on" : "off"}`}
              ></i>
            </Button>
            <Button color="danger">
              <i
                className="fa-solid fa-trash-can"
                onClick={() => removeTodo(id)}
              ></i>
            </Button>
          </div>
        </>
      )}
    </li>
  );
}
export default Todo;
