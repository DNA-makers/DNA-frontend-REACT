import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import LandingPage from "./pages/landingPage";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import FAQPage from "./pages/FAQPage";
import AboutusPage from "./pages/AboutusPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";

class App extends React.Component {

  render() {

    return (
      <Router>
        <div>
          <Navigation />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/FAQPage" element={<FAQPage />} />
            <Route path="/landingsPage" element={<LandingPage />} />
            <Route path="/aboutus" element={<AboutusPage />} />
            <Route path="/admin" element={<LoginPage />}></Route>
            <Route path="/adminpanel" element={<AdminPage />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
