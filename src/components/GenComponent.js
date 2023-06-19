import "./GenComponent";

const GenComponent = (props) => {
  if (props.variant != props.divergent) {
    return;
  }
  return (
    <button
      className={props.active ? "selected-item kolom-item" : "kolom-item"}
      onClick={() => props.onClick()}
    >
      {props.gen_code}
    </button>
  );
};

export default GenComponent;
