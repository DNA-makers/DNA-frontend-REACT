import React, { useState } from "react";
import GenKolomComponent from "../components/GenKolomComponent";
import AdviceKolomComponent from "../components/AdviceKolomComponent";
import "./HomePage.css";

const HomePage = () => {
  const [variantIsVisible, setVariantIsVisible] = useState(false);
  const [nonVariantIsVisible, setNonVariantIsVisible] = useState(false);
  const [adviceIsVisible, setAdviceIsVisible] = useState(false);
  const [gen_code, setGenCode] = useState(null);

  const toggleVariantComponent = () => {
    setVariantIsVisible(!variantIsVisible);
    setNonVariantIsVisible(false);
    setAdviceIsVisible(false);
  };

  const toggleNonVariantComponent = () => {
    setNonVariantIsVisible(!nonVariantIsVisible);
    setVariantIsVisible(false);
    setAdviceIsVisible(false);
  };

  const getAdviceParent = (code) => {
    setGenCode(code);
    setAdviceIsVisible(true);
  };

  return (
    <div>
      <section className="column-container">
        <article className="kolom">
          <button
            className={
              variantIsVisible ? "selected-item kolom-item" : "kolom-item"
            }
            onClick={toggleVariantComponent}
          >
            <p>Afwijkend</p>
          </button>
          <button
            className={
              nonVariantIsVisible ? "selected-item kolom-item" : "kolom-item"
            }
            onClick={toggleNonVariantComponent}
          >
            <p>Niet Afwijkend</p>
          </button>
        </article>
        {variantIsVisible && (
          <GenKolomComponent variant={1} getAdvice={getAdviceParent} />
        )}
        {nonVariantIsVisible && (
          <GenKolomComponent variant={0} getAdvice={getAdviceParent} />
        )}

        {adviceIsVisible && gen_code && (
          <AdviceKolomComponent
            gen_code={gen_code}
            show_searchbar={1}
            bar_style={"kolom-item searchbar-input"}
          />
        )}
      </section>
    </div>
  );
};

export default HomePage;
