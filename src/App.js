import { useEffect, useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import "./App.css";
import TodoInput from "./components/TodoInput";
import Filter from "./components/filter/Filter";
import PageLimit from "./components/page-limit/PageLimit";
import TodoList from "./components/todo-list/TodoList";
import Pagination from "./components/pagination/Pagination";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [searchStatus, setSearchStatus] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    try {
      const fetchTodos = async () => {
        const res = await axios.get("http://localhost:8080/todos");
        setTodoList(res.data.todos);
      };
      fetchTodos();
    } catch (err) {
      console.log(err);
    }
  }, []);

  // TodoInput -> add to TodoList
  const createTodo = async (title) => {
    try {
      const newTodo = { title, completed: false };
      await axios.post("http://localhost:8080/todos", newTodo).then((res) => {
        const newTodoList = [res.data.todo, ...todoList];
        setTodoList(newTodoList);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const removeTodo = async (id) => {
    try {
      await axios.delete("http://localhost:8080/todos/" + id);
      const toDelete = await axios.get("http://localhost:8080/todos");
      setTodoList(toDelete.data.todos);
    } catch (err) {
      console.log(err);
    }
    // const idx = todoList.findIndex((el) => el.id === id);
    // if (idx !== -1) {
    //   const oldTodoList = [...todoList];
    //   oldTodoList.splice(idx, 1);
    //   setTodoList(oldTodoList);
    // }
  };

  // newValue => {title, completed}
  const updateTodo = async (newValue, id) => {
    await axios.put(`http://localhost:8080/todos/${id}`, newValue);
    const oldTodoList = await axios.get("http://localhost:8080/todos");
    setTodoList(oldTodoList.data.todos);
    console.log(oldTodoList);

    // const idx = todoList.findIndex((el) => el.id === id);
    // if (idx !== -1) {
    //   const oldTodoList = [...todoList];
    //   // return old obj,  change old obj to new value in obj (merge obj)
    //   oldTodoList[idx] = { ...oldTodoList[idx], ...newValue };
    //   setTodoList(oldTodoList);
    // }
  };

  const changeSearchStatus = (value) => {
    setSearchStatus(value);
  };

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
