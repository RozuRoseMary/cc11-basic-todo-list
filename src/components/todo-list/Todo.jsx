import Button from "../ui/Button";

function Todo(props) {
  const { title, completed } = props;

  return (
    <li
      className={`list-group-item d-flex align-items-center p-3 bd-callout bd-callout-${
        completed ? "success" : "warning"
      }`}
    >
      <span className="flex-grow-1">
        {/* {props.title} */}
        {title}
      </span>
      <div className="btn-group" role="button">
        <Button color="outline-info">
          <i className={`fa-solid fa-toggle-${completed ? "on" : "off"}`}></i>
        </Button>
        <Button color="danger">
          <i className="fa-solid fa-trash-can"></i>
        </Button>
      </div>
    </li>
  );
}
export default Todo;
