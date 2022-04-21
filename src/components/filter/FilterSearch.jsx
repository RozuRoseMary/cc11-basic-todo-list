import Button from "../ui/Button";

function FilterSearch(props) {
  const { title, changeSearchTerm, searchTerm } = props;
  return (
    <div className="input-group shadow">
      <input
        type="text"
        className="form-control is-invalid shadow-none"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => changeSearchTerm(e.target.value)}
      />
      <Button color="dark" onClick={() => changeSearchTerm("")}>
        <i className="fa-solid fa-x"></i>{" "}
      </Button>
    </div>
  );
}
export default FilterSearch;
