function App() {
  return (
    <div className="container max-w-xs pt-5">
      <div className="input-group shadow">
        <input
          type="text"
          className="form-control is-invalid"
          placeholder="Add task"
        />
        <button className="btn btn-success shadow-none">
          <i className="fa-solid fa-plus" />
        </button>
        <button className="btn btn-outline-secondary shadow-none">
          <i className="fa-solid fa-xmark" />
        </button>
      </div>
      <small className="text-danger mt-1">Task is required.</small>

      <div className="mt-4 d-flex">
        <div className="input-group shadow">
          <input type="text" className="form-control" placeholder="Search" />
          <button className="btn btn-dark shadow-none">
            <i className="fa-solid fa-xmark" />
          </button>
        </div>

        <div className="btn-group shadow ms-3">
          <input
            type="radio"
            className="btn-check"
            name="status"
            id="all"
            defaultChecked
          />
          <label className="btn btn-outline-dark shadow-none" htmlFor="all">
            <i className="fa-solid fa-list-ul" />
          </label>

          <input
            type="radio"
            className="btn-check"
            name="status"
            id="completed"
          />
          <label
            className="btn btn-outline-dark shadow-none"
            htmlFor="completed"
          >
            <i className="fa-solid fa-clipboard-check" />
          </label>

          <input
            type="radio"
            className="btn-check"
            name="status"
            id="pending"
          />
          <label className="btn btn-outline-dark shadow-none" htmlFor="pending">
            <i className="fa-regular fa-clipboard" />
          </label>
        </div>
      </div>

      <div className="d-flex align-items-center mt-4">
        <small className="text-muted">Show : </small>
        <select
          className="form-select form-select-sm ms-2"
          style={{ width: "5rem" }}
        >
          <option>10</option>
          <option>25</option>
          <option>50</option>
        </select>
      </div>

      <ul className="list-group mt-2 shadow">
        <li className="list-group-item d-flex align-items-center p-3 bd-callout bd-callout-success">
          <span className="flex-grow-1" role="button">
            Task 1
          </span>
          <div className="btn-group">
            <button className="btn btn-outline-info shadow-none">
              <i className="fa-solid fa-toggle-on" />
            </button>
            <button className="btn btn-danger shadow-none">
              <i className="fa-regular fa-trash-can" />
            </button>
          </div>
        </li>

        <li className="list-group-item d-flex align-items-center p-3 bd-callout bd-callout-warning">
          <span className="flex-grow-1" role="button">
            Task 2
          </span>
          <div className="btn-group">
            <button className="btn btn-outline-info shadow-none">
              <i className="fa-solid fa-toggle-off" />
            </button>
            <button className="btn btn-danger shadow-none">
              <i className="fa-regular fa-trash-can" />
            </button>
          </div>
        </li>

        <li className="list-group-item p-3 bd-callout bd-callout-warning">
          <div className="input-group shadow">
            <input type="text" className="form-control" value="Task 3" />
            <button className="btn btn-primary shadow-none">
              <i className="fa-solid fa-check" />
            </button>
            <button className="btn btn-outline-secondary shadow-none">
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
        </li>

        <li className="list-group-item p-3 bd-callout bd-callout-success">
          <div className="input-group shadow">
            <input type="text" className="form-control is-invalid" />
            <button className="btn btn-primary shadow-none">
              <i className="fa-solid fa-check" />
            </button>
            <button className="btn btn-outline-secondary shadow-none">
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          <small className="text-danger mt-1">Task is required.</small>
        </li>
      </ul>

      <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between mt-2 flex-wrap">
        <small className="text-muted mb-1 mb-sm-0">
          Showing 1 to 10 of 96 entries
        </small>

        <ul className="pagination pagination-sm mb-0">
          <li className="page-item">
            <button className="page-link shadow-none">
              <i className="fa-solid fa-angle-left small" />
            </button>
          </li>
          <li className="page-item">
            <button className="page-link shadow-none">1</button>
          </li>
          <li className="page-item disabled">
            <button className="page-link">
              <i
                className="fa-solid fa-ellipsis"
                style={{ fontSize: "0.375rem" }}
              />
            </button>
          </li>
          <li className="page-item">
            <button className="page-link shadow-none">3</button>
          </li>
          <li className="page-item active">
            <button className="page-link shadow-none">4</button>
          </li>
          <li className="page-item">
            <button className="page-link shadow-none">5</button>
          </li>
          <li className="page-item disabled">
            <button className="page-link">
              <i
                className="fa-solid fa-ellipsis"
                style={{ fontSize: "0.375rem" }}
              />
            </button>
          </li>
          <li className="page-item">
            <button className="page-link shadow-none">10</button>
          </li>
          <li className="page-item">
            <button className="page-link shadow-none">
              <i className="fa-solid fa-angle-right small" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
