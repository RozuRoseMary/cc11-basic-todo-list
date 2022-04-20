function PageItem(props) {
  const { active, disabled } = props;
  return (
    // active button
    <li
      className={`page-item ${active ? "active" : ""} ${
        disabled ? "disabled" : ""
      }`}
    >
      <button className="page-link shadow-none"> {props.children}</button>
    </li>
  );
}

export default PageItem;
