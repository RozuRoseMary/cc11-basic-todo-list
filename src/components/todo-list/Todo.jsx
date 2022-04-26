import { useContext, useState } from "react";
import Button from "../ui/Button";
import TodoInput from "../TodoInput";
import { TodoContext } from "../../context/TodoContext";

function Todo(props) {
  // const { title, completed, id, removeTodo, updateTodo } = props;
  const { test, title, completed, id, removeTodo, updateTodo } =
    useContext(TodoContext);

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
          // id={id}
          // title={title}
          // completed={completed}
          closeEditing={closeEditing}
          // updateTodo={props.updateTodo}
        />
      ) : (
        <>
          <span
            className="flex-grow-1"
            role="button"
            onClick={() => setIsEditing(true)}
          >
            {/* {test} */}
            {title}
          </span>
          <div className="btn-group" role="button">
            <Button
              color="outline-info"
              onClick={() => updateTodo({ completed: !completed, title }, id)}
            >
              <i
                className={`fa-solid fa-toggle-${completed ? "on" : "off"}`}
              ></i>
            </Button>
            <Button color="danger">
              <i
                className="fa-solid fa-trash-can"
                onClick={
                  // () => console.log(id)
                  removeTodo(id)
                  // console.log(removeTodo())
                }
              ></i>
            </Button>
          </div>
        </>
      )}
    </li>
  );
}
export default Todo;
