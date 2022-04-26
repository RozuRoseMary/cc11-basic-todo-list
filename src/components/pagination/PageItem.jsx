import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

function PageItem(props) {
  const { active, disabled } = useContext(TodoContext);

  return (
    <li
      className={`page-item ${active ? "active" : ""} ${
        disabled ? "disabled" : ""
      }`}
    >
      <button className="page-link shadow-none"> {props.children}</button>
    </li>
  );
}

export default PageItem;
