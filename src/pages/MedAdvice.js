import React, { useState } from "react";
import AdviceKolomComponent from "../components/AdviceKolomComponent";
import "./HomePage.css";

const MedAdvice = () => {
  return (
    <section className="column-container advices-container">
      <article className="search-bar">hoi</article>
      <AdviceKolomComponent gen_code={""} />
    </section>
  );
};

export default MedAdvice;