import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faFont, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import ImageComponent from "./ImageComponent";
import Nav_logo from "../img/navbar-logo.png";

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav>
      <div className="navbar-container">
        <ul className="menu-items">
          <li className="">
            <Link to="/">
              <ImageComponent src={Nav_logo} alt={"MijnDNAmedicatiepas"} style={{  height: "80px" }}/>
            </Link>
          </li>
        </ul>
        <ul className="menu-items">
          <li><Link to="/landingsPage">Overzicht</Link></li>
          <li><Link to="/aboutus">Over Ons</Link></li>
          <li><Link to="/landingsPage">FAQ</Link></li>
          <li className="dropdown-item">
            <button className="dropdown-toggle" onClick={handleDropdownToggle}>
              <FontAwesomeIcon icon={faBars} />
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li><FontAwesomeIcon icon={faFont} /></li>
                <li><FontAwesomeIcon icon={faCircleHalfStroke} /></li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
