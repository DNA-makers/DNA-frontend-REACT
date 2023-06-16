import "./GenComponent";

const GenComponent = (props) => {
  const getAdvice = (gen_code) => {
    const code = gen_code;
    props.getAdvice(code);
  };

  if (props.variant != props.divergent) {
    return;
  }
  return (
    <button className="kolom-item" onClick={() => getAdvice(props.gen_code)}>
      {props.gen_code}
    </button>
  );
};

export default GenComponent;
