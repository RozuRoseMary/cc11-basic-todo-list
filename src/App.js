import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./App.css";
import TodoInput from "./components/TodoInput";
import Filter from "./components/filter/Filter";
import PageLimit from "./components/page-limit/PageLimit";
import TodoList from "./components/todo-list/TodoList";
import Pagination from "./components/pagination/Pagination";

// let initialTodoList;

function App() {
  const [todoList, setTodoList] = useState([]);
  const [searchStatus, setSearchStatus] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8080/todos").then((res) => {
      setTodoList(res.data.todos);
    });
  }, []);

  // TodoInput -> add to TodoList
  function createTodo(title) {
    const newTodo = { title, completed: false, id: uuidv4() };
    const newTodoList = [newTodo, ...todoList];
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
