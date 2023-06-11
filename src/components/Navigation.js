import React from "react";
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/landingsPage">LandingsPage</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;