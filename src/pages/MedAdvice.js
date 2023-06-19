import React, { useState } from "react";
import AdviceKolomComponent from "../components/AdviceKolomComponent";
import "./HomePage.css";

const MedAdvice = () => {
  return (
    <section className="column-container advices-container">
      <AdviceKolomComponent gen_code={""} />
    </section>
  );
};

export default MedAdvice;
