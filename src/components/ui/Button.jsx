function Button(props) {
  // if not has props return 'primary'
  //shadow-none -> remove shadow in bs5
  const classes = `btn btn-${props.color || "primary"} shadow-none`;

  return (
    <button className={classes}>
      {/* props.children -> between tag component */}
      {/* <i className="fa-solid fa-plus"></i> */}
      {props.children}
    </button>
  );
}
export default Button;
