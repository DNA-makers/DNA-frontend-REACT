import "./AdviceComponent";
import { useState } from "react";

const AdviceComponent = (props) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <button
      className={
        expanded ? "kolom-item expand selected-item" : "kolom-item collapsed"
      }
      onClick={toggleExpanded}
    >
      <h3>{props.title}</h3>
      <p>{props.advise}</p>
    </button>
  );
};

export default AdviceComponent;
