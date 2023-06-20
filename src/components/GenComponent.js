import "./GenComponent";

const GenComponent = (props) => {
  if (props.variant !== props.divergent) {
    return;
  }
  return (
    <button
      className={props.active ? "selected-item kolom-item" : "kolom-item"}
      onClick={() => props.onClick()}
    >
      <p>{props.gen_code}</p>
    </button>
  );
};

export default GenComponent;
