import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import RadioButton from "../ui/RadioButton";

function FilterStatus() {
  const { changeSearchStatus, searchStatus } = useContext(TodoContext);

  return (
    <div className="btn-group ms-3 shadow">
      <RadioButton
        name="status"
        id="all"
        color="outline-dark"
        onChange={() => changeSearchStatus(null)}
        defaultChecked={searchStatus === null}
      >
        <i className="fa-solid fa-list"></i>
      </RadioButton>
      <RadioButton
        name="status"
        id="completed"
        color="outline-dark"
        onChange={() => changeSearchStatus(true)}
        defaultChecked={searchStatus === true}
      >
        <i className="fa-solid fa-clipboard-check"></i>
      </RadioButton>
      <RadioButton
        name="status"
        id="pending"
        color="outline-dark"
        onChange={() => changeSearchStatus(false)}
        defaultChecked={searchStatus === false}
      >
        <i className="fa-solid fa-clipboard"></i>
      </RadioButton>
    </div>
  );
}
export default FilterStatus;
