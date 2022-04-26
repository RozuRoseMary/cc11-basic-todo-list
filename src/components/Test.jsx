import React from "react";
import { TodoContext } from "../context/TodoContext";

import TodoInput from "./components/TodoInput";
import Filter from "./components/filter/Filter";
import FilterSearch from "./components/filter/FilterSearch";
import PageLimit from "./components/page-limit/PageLimit";
import TodoList from "./components/todo-list/TodoList";
import Pagination from "./components/pagination/Pagination";

function Test() {
  return (
    <div>
      <TodoInput></TodoInput>
      <Filter></Filter>
      <PageLimit></PageLimit>
      <TodoList></TodoList>
      <Pagination></Pagination>
    </div>
  );
}

export default Test;
