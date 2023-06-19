import React from 'react';
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className='notFoundContainer'>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>De pagina die u probeert te bereiken bestaat niet.</p>
      <Link to="/landingsPage">
        <button className='returnButton'>Terug naar homepagina</button>
      </Link>
      
    </div>
  );
};

export default NotFound;