import { v4 as uuidv4 } from "uuid";
import { TodoContextProvider } from "./context/TodoContext";
import "./App.css";
import TodoInput from "./components/TodoInput";
import Filter from "./components/filter/Filter";
import PageLimit from "./components/page-limit/PageLimit";
import TodoList from "./components/todo-list/TodoList";
import Pagination from "./components/pagination/Pagination";

function App() {
  return (
    <TodoContextProvider>
      <div className="container max-w-xs mt-2">
        <TodoInput></TodoInput>
        <Filter></Filter>
        <PageLimit></PageLimit>
        <TodoList></TodoList>
        <Pagination></Pagination>
      </div>
    </TodoContextProvider>
  );
}

export default App;
