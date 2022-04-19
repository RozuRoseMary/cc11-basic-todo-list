import FilterSearch from "./FilterSearch";
import FilterStatus from "./FilterStatus";

function Filter() {
  return (
    <div className="d-flex">
      <FilterSearch />
      <FilterStatus />
    </div>
  );
}
export default Filter;
