import "./GenComponent";
import { useState } from "react";

const GenComponent = (props) => {
  const [genIsSelected, setGenIsSelected] = useState(false);

  const getAdvice = (gen_code) => {
    const code = gen_code;
    props.getAdvice(code);
  };

  const genClicked = (gen_code) => {
    getAdvice(gen_code);
    setGenIsSelected(!genIsSelected);
  };

  if (props.variant != props.divergent) {
    return;
  }
  return (
    <button
      className={genIsSelected ? "selected-item kolom-item" : "kolom-item"}
      onClick={() => genClicked(props.gen_code)}
    >
      {props.gen_code}
    </button>
  );
};

export default GenComponent;
