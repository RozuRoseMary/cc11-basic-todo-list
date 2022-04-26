function Button(props) {
  // if not has props return 'primary'
  //shadow-none -> remove shadow in bs5
  const classes = `btn btn-${props.color || "primary"} shadow-none`;

  return (
    <button className={classes} onClick={props.onClick}>
      {props.children}
    </button>
  );
}
export default Button;
