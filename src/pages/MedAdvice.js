import AdviceKolomComponent from "../components/AdviceKolomComponent";
import "./HomePage.css";

const MedAdvice = () => {
  return (
    <section className="column-container advices-container">
      <AdviceKolomComponent
        gen_code={""}
        show_searchbar={1}
        bar_style={"kolom-item thick-bar searchbar-input"}
      />
    </section>
  );
};

export default MedAdvice;
