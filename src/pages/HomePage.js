import React, { useState } from "react";
import GenKolomComponent from "../components/GenKolomComponent";
import "./HomePage.css";

const HomePage = () => {
  const [variantIsVisible, setVariantIsVisible] = useState(false);
  const [nonVariantIsVisible, setNonVariantIsVisible] = useState(false);

  const toggleVariantComponent = () => {
    setVariantIsVisible(!variantIsVisible);
    setNonVariantIsVisible(false);
  };

  const toggleNonVariantComponent = () => {
    setNonVariantIsVisible(!nonVariantIsVisible);
    setVariantIsVisible(false);
  };

  return (
    <div>
      <section className="column-container">
        <article className="kolom">
          <button className="kolom-item" onClick={toggleVariantComponent}>
            Afwijkend
          </button>
          <button className="kolom-item" onClick={toggleNonVariantComponent}>
            Niet Afwijkend
          </button>
        </article>
        {variantIsVisible && <GenKolomComponent variant={1} />}
        {nonVariantIsVisible && <GenKolomComponent variant={0} />}
      </section>
    </div>
  );
};

export default HomePage;
