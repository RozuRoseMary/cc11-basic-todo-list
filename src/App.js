import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TodoInput from "./components/TodoInput";
import Filter from "./components/filter/Filter";
import PageLimit from "./components/page-limit/PageLimit";
import TodoList from "./components/todo-list/TodoList";
import Pagination from "./components/pagination/Pagination";

// always have key -> id or st. for difference value
const initialTodoList = [
  {
    id: uuidv4(),
    title: "Homework",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "Personal Project Figma",
    completed: true,
  },
  {
    id: uuidv4(),
    title: "Homework",
    completed: true,
  },
];
console.log(initialTodoList);

function App() {
  const [todoList, setTodoList] = useState(initialTodoList);

  // TodoInput -> add to TodoList
  const createTodo = (title) => {
    //get new todo
    const newTodo = { title, completed: false, id: uuidv4() };
    //clone old initialTodoList
    // const oldTodoList = [...todoList];
    // // insert new to old
    // oldTodoList.unshift(newTodo);

    // แบบย่อ จากด้านบน
    const newTodoList = [newTodo, ...todoList];

    // update state
    setTodoList(newTodoList);
  };

  return (
    <div className="container max-w-xs mt-2">
      {/* update todo list */}
      <TodoInput createTodo={createTodo} />

      <Filter />
      <PageLimit />

      {/* show todo list in obj*/}
      <TodoList todoList={todoList} />
      <Pagination />
    </div>
  );
}

export default App;
