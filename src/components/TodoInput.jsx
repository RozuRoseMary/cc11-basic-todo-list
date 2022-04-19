// import { Button } from "bootstrap";
import Button from "./ui/Button";
// fragment -> React.Fragment -> big div
function TodoInput() {
  return (
    <>
      {/* fragment */}
      <div className="input-group mt-4 shadow">
        <input
          type="text"
          className="form-control is-invalid shadow-none"
          placeholder="Enter new todo"
        />
        <Button color="success">
          <i className="fa-solid fa-plus"></i> {/*props.children */}
        </Button>
        <Button color="outline-secondary">
          <i className="fa-solid fa-x"></i> {/*props.children */}
        </Button>
        {/* <button class="btn btn-outline-secondary" type="button">
        <i className="fa-solid fa-x"></i>
      </button> */}
      </div>
      <small className="text-danger">Title is required.</small>
    </>
  );
}

export default TodoInput;
