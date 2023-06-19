import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const ButtonComponent = ({ text, className, link }) => {
  return (
    <button className={className}>
      <Link to={link}>{text}</Link>
    </button>
  );
};

export default ButtonComponent;
