import React from "react";
import "../App.css";

const ButtonComponent = ({ text, className }) => {
    return (
        <button className={className}>
            {text}
        </button>
    )
}

export default ButtonComponent;