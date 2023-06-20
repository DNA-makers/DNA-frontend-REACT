import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faFont,
  faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import ImageComponent from "./ImageComponent";
import Nav_logo from "../logo.svg";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobileView = windowWidth < 830;

  return isMobileView ? (
    <nav>
      <div className="navbar-container">
        <ul className="menu-items">
          <li>
            <Link to="/" className="main-title">
              <ImageComponent src={Nav_logo} alt="MijnDNAmedicatiepas logo" />
              <section className="title">
                <h1>MijnDNAmedicatiepas</h1>
              </section>
            </Link>
          </li>
        </ul>
        <ul className="menu-items">
          <li className="dropdown-item">
            <button
              className={`dropdown-toggle ${isDropdownOpen ? "rotate" : ""}`}
              onClick={handleDropdownToggle}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </li>
        </ul>
      </div>
      <div>
        <ul className="menu-items">
          {isDropdownOpen && (
            <ul className="dropdown-menu open">
              <li>
                <Link to="/">Overzicht</Link>
              </li>
              <li>
                <Link to="/aboutus">Over Ons</Link>
              </li>
              <li>
                <Link to="/FAQPage">FAQPage</Link>
              </li>
            </ul>
          )}
        </ul>
      </div>
    </nav>
  ) : (
    <nav>
      <div className="navbar-container">
        <ul className="menu-items">
          <li>
            <Link to="/" className="main-title">
              <ImageComponent src={Nav_logo} alt="MijnDNAmedicatiepas" />
              <section className="title">
                <h1>MijnDNAmedicatiepas</h1>
                <h2>Betrouwbare adviezen op basis van uw DNA.</h2>
              </section>
            </Link>
          </li>
        </ul>
        <ul className="menu-items">
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Overzicht</Link>
          </li>
          <li className={location.pathname === "/aboutus" ? "active" : ""}>
            <Link to="/aboutus">Over Ons</Link>
          </li>
          <li className={location.pathname === "/FAQPage" ? "active" : ""}>
            <Link to="/FAQPage">FAQPage</Link>
          </li>
          <li className="dropdown-item">
            <button
              className={`dropdown-toggle ${isDropdownOpen ? "rotate" : ""}`}
              onClick={handleDropdownToggle}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <FontAwesomeIcon icon={faFont} />
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircleHalfStroke} />
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
