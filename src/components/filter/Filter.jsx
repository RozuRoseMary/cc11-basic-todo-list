import FilterSearch from "./FilterSearch";
import FilterStatus from "./FilterStatus";

function Filter(props) {
  const { changeSearchTerm, searchTerm } = props;

  return (
    <div className="d-flex">
      <FilterSearch
        changeSearchTerm={changeSearchTerm}
        searchTerm={searchTerm}
      />
      <FilterStatus
        changeSearchStatus={props.changeSearchStatus}
        searchStatus={props.searchStatus}
      />
    </div>
  );
}
export default Filter;
