import "./AdviceComponent";

const AdviceComponent = (props) => {
  return (
    <button className="kolom-item">
      <h3>{props.title}</h3>
      <p>{props.advise}</p>
    </button>
  );
};

export default AdviceComponent;
