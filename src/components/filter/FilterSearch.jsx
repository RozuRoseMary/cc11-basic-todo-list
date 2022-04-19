import Button from "../ui/Button";

function FilterSearch() {
  return (
    <div className="input-group shadow">
      <input
        type="text"
        className="form-control is-invalid shadow-none"
        placeholder="Search"
      />
      <Button color="dark">
        <i className="fa-solid fa-x"></i>{" "}
      </Button>
    </div>
  );
}
export default FilterSearch;
