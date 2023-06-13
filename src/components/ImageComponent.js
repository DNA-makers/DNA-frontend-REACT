import React from "react";

const ImageComponent = ({ src, alt, style }) => {
    return <img src={src} alt={alt} className="menuImg" style={style}></img>
}

export default ImageComponent;