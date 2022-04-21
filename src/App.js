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
  {
    id: uuidv4(),
    title: "Personal Project",
    completed: false,
  },
];
console.log(initialTodoList);

function App() {
  const [todoList, setTodoList] = useState(initialTodoList);
  const [searchStatus, setSearchStatus] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // TodoInput -> add to TodoList
  function createTodo(title) {
    //get new todo
    const newTodo = { title, completed: false, id: uuidv4() };
    // // clone old initialTodoList
    // const oldTodoList = [...todoList];
    // // insert new to old
    // oldTodoList.unshift(newTodo);

    // แบบย่อ จากด้านบน
    const newTodoList = [newTodo, ...todoList];
    // update state
    setTodoList(newTodoList);
  }

  function removeTodo(id) {
    //😢filter take a lot of time
    //find index
    const idx = todoList.findIndex((el) => el.id === id);
    // find index or not
    if (idx !== -1) {
      //clone
      const oldTodoList = [...todoList];
      //use splice
      oldTodoList.splice(idx, 1);
      //set new state
      setTodoList(oldTodoList);
    }
  }

  // newValue => {title, completed}
  function updateTodo(newValue, id) {
    const idx = todoList.findIndex((el) => el.id === id);
    if (idx !== -1) {
      const oldTodoList = [...todoList];
      // return old obj,  change old obj to new value in obj (merge obj)
      oldTodoList[idx] = { ...oldTodoList[idx], ...newValue };
      setTodoList(oldTodoList);
    }
  }

  function changeSearchStatus(value) {
    setSearchStatus(value);
  }

  // let filteredTodoList = [];
  // switch (searchStatus) {
  //   case true: {
  //     filteredTodoList = todoList.filter((el) => el.completed);
  //     break;
  //   }
  //   case false: {
  //     filteredTodoList = todoList.filter((el) => !el.completed);
  //     break;
  //   }
  //   default:
  //     filteredTodoList = [...todoList];
  // }
  const filteredTodoList = todoList.filter(
    (el) =>
      (searchStatus === null || el.completed === searchStatus) &&
      el.title.toLowerCase().includes(searchTerm.toLowerCase())
    // searchStatus === null => show all

    // if not null => searchStatus true or false
  );

  function changeSearchTerm(value) {
    setSearchTerm(value);
  }

  // const filteredTodoList2 = filteredTodoList.filter((el) =>
  //   el.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div className="container max-w-xs mt-2">
      {/* update todo list */}
      <TodoInput createTodo={createTodo} />

      <Filter
        changeSearchStatus={changeSearchStatus}
        searchStatus={searchStatus}
        changeSearchTerm={changeSearchTerm}
        searchTerm={searchTerm}
      />
      <PageLimit />

      {/* show todo list in obj*/}
      <TodoList
        todoList={filteredTodoList}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />

      <Pagination />
    </div>
  );
}

export default App;
