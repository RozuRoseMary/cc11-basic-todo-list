function PageLimit() {
  return (
    <div className="d-flex mt-4 align-items-center">
      <small className="text-muted">Show :</small>
      <select
        className="form-select form-select-sm ms-4"
        style={{ width: "5rem" }}
        name=""
        id=""
      >
        <option value="">10</option>
        <option value="">25</option>
        <option value="">50</option>
      </select>
    </div>
  );
}
export default PageLimit;
