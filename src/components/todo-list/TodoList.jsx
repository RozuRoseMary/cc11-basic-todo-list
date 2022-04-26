import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import Todo from "./Todo";

function TodoList() {
  const { todoList, removeTodo, updateTodo } = useContext(TodoContext);
  return (
    <ul className="list-group shadow mt-4">
      {todoList.map((el) => (
        <Todo
          key={el.id}
          id={el.id}
          title={el.title}
          completed={el.completed}
          // removeTodo={removeTodo}
          // updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
}
export default TodoList;
