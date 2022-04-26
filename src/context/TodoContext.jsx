import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const TodoContext = createContext();

function TodoContextProvider(props) {
  const [todoList, setTodoList] = useState([]);
  const [searchStatus, setSearchStatus] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const test = "เดี๋ยวลบจ้า";

  useEffect(() => {
    // axios
    //   .get("http://localhost:8080/todos")
    //   .then((res) => {
    //     setTodoList(res.data.todos);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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

  const createTodo = async (title) => {
    try {
      // const newTodo = { title, completed: false };
      // await axios.post("http://localhost:8080/todos", newTodo).then((res) => {
      // const newTodoList = [res.data.todo, ...todoList];
      // setTodoList(newTodoList);
      await axios
        .post("http://localhost:8080/todos", { title, completed: false })
        .then((res) => {
          const newTodoList = [res.data.todo, ...todoList];
          setTodoList(newTodoList);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const removeTodo = async (id) => {
    console.log(id);
    try {
      await axios.delete("http://localhost:8080/todos/" + id);
      const toDelete = await axios.get("http://localhost:8080/todos");
      setTodoList(toDelete.data.todos);
    } catch (err) {
      console.log(err);
    }
  };

  const updateTodo = async (newValue, id) => {
    await axios.put(`http://localhost:8080/todos/${id}`, newValue);
    const oldTodoList = await axios.get("http://localhost:8080/todos");
    setTodoList(oldTodoList.data.todos);
    console.log(oldTodoList);
  };

  // FilterSearch
  const changeSearchStatus = (value) => {
    setSearchStatus(value);
  };

  const filteredTodoList = todoList.filter(
    (el) =>
      (searchStatus === null || el.completed === searchStatus) &&
      el.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function changeSearchTerm(value) {
    setSearchTerm(value);
  }

  return (
    <TodoContext.Provider
      value={{
        test,
        todoList,
        setTodoList,
        searchStatus,
        setSearchStatus,
        searchTerm,
        setSearchTerm,
        createTodo,
        removeTodo,
        updateTodo,
        changeSearchStatus,
        filteredTodoList,
        changeSearchTerm,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoContextProvider };
