import React, { useState } from "react";
import AdviceKolomComponent from "../components/AdviceKolomComponent";
import "./HomePage.css";

const MedAdvice = () => {
  const [query, setQuery] = useState("");

  return (
    <section className="column-container advices-container">
      <AdviceKolomComponent gen_code={""} show_searchbar={1} />
    </section>
  );
};

export default MedAdvice;
