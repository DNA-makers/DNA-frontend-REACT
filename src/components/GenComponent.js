import "./GenComponent";

const GenComponent = (props) => {
  if (props.variant != props.divergent) {
    return;
  }
  return <button className="kolom-item">{props.gen_code}</button>;
};

export default GenComponent;
