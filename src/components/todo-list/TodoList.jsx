import Todo from "./Todo";

function TodoList(props) {
  //TodoList -> delete task
  // const deleteTask = (todo) => {
  // };

  return (
    <ul className="list-group shadow mt-4">
      {props.todoList.map((el) => (
        <Todo
          key={el.id}
          title={el.title}
          completed={el.completed}
          // deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}
export default TodoList;
