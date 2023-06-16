import React, { useState } from "react";
import GenKolomComponent from "../components/GenKolomComponent";
import AdviceKolomComponent from "../components/AdviceKolomComponent";
import "./HomePage.css";

const HomePage = () => {
  const [variantIsVisible, setVariantIsVisible] = useState(false);
  const [nonVariantIsVisible, setNonVariantIsVisible] = useState(false);
  const [gen_code, setGenCode] = useState(null);

  const toggleVariantComponent = () => {
    setVariantIsVisible(!variantIsVisible);
    setNonVariantIsVisible(false);
  };

  const toggleNonVariantComponent = () => {
    setNonVariantIsVisible(!nonVariantIsVisible);
    setVariantIsVisible(false);
  };

  const getAdviceParent = (code) => {
    setGenCode(code);
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
        {variantIsVisible && (
          <GenKolomComponent variant={1} getAdvice={getAdviceParent} />
        )}
        {nonVariantIsVisible && (
          <GenKolomComponent variant={0} getAdvice={getAdviceParent} />
        )}

        {gen_code && <AdviceKolomComponent gen_code={gen_code} />}
      </section>
    </div>
  );
};

export default HomePage;
