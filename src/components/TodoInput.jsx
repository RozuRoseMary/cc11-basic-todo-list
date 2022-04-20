import { useState } from "react";
import { validateRegister } from "./helpers/validate";
import Button from "./ui/Button";
// fragment -> React.Fragment -> big div
function TodoInput(props) {
  const [input, setInput] = useState({
    email: "",
    username: "",
    phoneNumber: "",
  });

  // const [error, setError] = useState({
  //   email: "",
  //   username: "",
  //   phoneNumber: "",
  // });
  const [error, setError] = useState({});

  const handleChangeInput = (e) => {
    // setInput({ ...input, event.target.name: e.target.value });

    const oldInput = { ...input };
    oldInput[e.target.name] = e.target.value;
    setInput(oldInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const newError = {};
    // if (!input.email) {
    //   newError.email = "Email is required.";
    // }
    // if (!input.username) {
    //   newError.username = "Username is required.";
    // }
    // if (!input.phoneNumber) {
    //   newError.phoneNumber = "Phone number is required.";
    // } else if (input.phoneNumber.length !== 10) {
    //   newError.phoneNumber = "Invalid phone number format";
    // }

    // if (Object.keys(newError).length > 0) {
    //   setError(newError);
    // }
    const newError = validateRegister(
      input.email,
      input.username,
      input.phoneNumber
    );

    if (Object.keys(newError).length > 0) {
      setError(newError);
    } else {
      setError({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* email */}
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={input.email}
          name="email"
          onChange={handleChangeInput}
        ></input>
        {error.email && <small className="text-danger">{error.email}</small>}
      </div>

      {/* username */}
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={input.username}
          name="username"
          onChange={handleChangeInput}
        />
        {error.username && (
          <small className="text-danger">{error.username}</small>
        )}
      </div>

      {/* phone number */}
      <div className="mb-3">
        <label htmlFor="phoneNumber" className="form-label">
          Phone Number
        </label>
        <input
          type="text"
          className="form-control"
          id="phoneNumber"
          value={input.phoneNumber}
          name="phoneNumber"
          onChange={handleChangeInput}
        />
        {error.phoneNumber && (
          <small className="text-danger">{error.phoneNumber}</small>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <button
        type="submit"
        className="btn btn-danger ms-3"
        onClick={() => setInput(" ")}
      >
        Cancel
      </button>
    </form>
  );
}

export default TodoInput;
