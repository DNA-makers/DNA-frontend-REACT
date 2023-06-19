import "./AdviceComponent";

const AdviceComponent = (props) => {
  return (
    <article className="kolom-item">
      <h3>{props.title}</h3>
      <p>{props.advise}</p>
    </article>
  );
};

export default AdviceComponent;
