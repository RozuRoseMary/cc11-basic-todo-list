import Todo from "./Todo";

function TodoList() {
  return (
    <ul className="list-group shadow mt-4">
      <Todo title="Homework" completed={true}></Todo>
      <Todo title="Personal Project Figma" completed={true}></Todo>
      <Todo title="Personal Project" completed={false}></Todo>
      <Todo title="Mid term exam" completed={false}></Todo>
      <Todo title="Lab" completed={false}></Todo>
    </ul>
  );
}
export default TodoList;
