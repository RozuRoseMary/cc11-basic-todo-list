import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const TodoContext = createContext();

function TodoContextProvider(props) {
  const [todoList, setTodoList] = useState([]);
  const [searchStatus, setSearchStatus] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/todos")
      .then((res) => {
        setTodoList(res.data.todos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const createTodo = (title) => {
    try {
      axios
        .post("http://localhost:8080/todos", { title, completed: false })
        .then((res) => {
          const newTodoList = [res.data.todo, ...todoList];
          setTodoList(newTodoList);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const removeTodo = (id) => {
    axios
      .delete("http://localhost:8080/todos/" + id)
      .then(() => {
        const idx = todoList.findIndex((el) => el.id === id);
        if (idx !== -1) {
          const cloneTodoList = [...todoList];
          cloneTodoList.splice(idx, 1);
          setTodoList(cloneTodoList);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateTodo = (newValue, id) => {
    axios
      .put(`http://localhost:8080/todos/${id}`, newValue)
      .then((res) => {
        const idx = todoList.findIndex((el) => el.id === id);
        if (idx !== -1) {
          const cloneTodoList = [...todoList];
          cloneTodoList[idx] = { ...cloneTodoList[idx], ...newValue };
          setTodoList(cloneTodoList);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
