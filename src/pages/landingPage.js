import React from "react";
import "./LandingPage.css";
import ImageComponent from "../components/ImageComponent";
import logo from "../img/logo.png";
import LUMC_logo from "../img/LUMC_logo.png";
import AMC_logo from "../img/AMC_logo.png";
import logo_maasstad from "../img/logo-maasstad.png"
import ButtonComponent from "../components/ButtonComponent";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="center">
        <ImageComponent src={logo} alt="Image is loading..." />
        <section className="action-buttons">
          <ButtonComponent text="Informatie voor patienten" className="patient-button"/>
          <ButtonComponent text="Informatie voor zorgverleners" className="caretaker-button"/>
        </section>
      </div>
      <section className="partners-section">
        <h2 className="partners-heading">Deze website wordt mede mogelijk gemaakt door:</h2>
        <div className="partners">
          <ImageComponent src={LUMC_logo} />
          <ImageComponent src={AMC_logo} />
          <ImageComponent src={logo_maasstad} />
        </div>
      </section>
    </div>
  );
}

export default LandingPage;