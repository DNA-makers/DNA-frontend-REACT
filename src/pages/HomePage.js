import React from "react";
import GenKolomComponent from "../components/GenKolomComponent";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Homepage!</h1>
      <section className="column-container">
        <article className="kolom">{/* afwijking keuze */}</article>
        <GenKolomComponent />
      </section>
    </div>
  );
};

export default HomePage;
