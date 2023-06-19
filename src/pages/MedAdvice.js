import React, { useState } from "react";
import AdviceKolomComponent from "../components/AdviceKolomComponent";
import "./HomePage.css";

const MedAdvice = () => {
  return (
    <section className="column-container advices-container">
      <article className="search-wrapper">
        <input
          id="searchbar-input"
          type="text"
          className="searchbar"
          placeholder="Zoeken..."
        />
      </article>
      <AdviceKolomComponent gen_code={""} />
    </section>
  );
};

export default MedAdvice;
