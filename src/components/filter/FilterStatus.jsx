import RadioButton from "../ui/RadioButton";

function FilterStatus() {
  return (
    <div className="btn-group ms-3 shadow">
      <RadioButton name="status" id="all" color="outline-dark">
        <i className="fa-solid fa-list"></i>
      </RadioButton>
      <RadioButton name="status" id="completed" color="outline-dark">
        <i className="fa-solid fa-clipboard-check"></i>
      </RadioButton>
      <RadioButton name="status" id="pending" color="outline-dark">
        <i className="fa-solid fa-clipboard"></i>
      </RadioButton>
    </div>
  );
}
export default FilterStatus;
