import "./GenComponent";

const GenComponent = (props) => {
  return (
    <section>
      <p> hallo {props.gen_code}</p>
    </section>
  );
};

export default GenComponent;
