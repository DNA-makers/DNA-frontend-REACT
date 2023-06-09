import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import LandingPage from "./pages/landingPage";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import FAQPage from "./pages/FAQPage";
import AboutusPage from "./pages/AboutusPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./components/NotFound";
import AdminPage from "./pages/AdminPage";
import MedAdvice from "./pages/MedAdvice";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />

          <Routes>
            <Route path="/overzicht" element={<HomePage />} />
            <Route path="/FAQPage" element={<FAQPage />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/aboutus" element={<AboutusPage />} />
            <Route path="/admin" element={<LoginPage />}></Route>
            <Route path="*" element={<NotFound />} />
            <Route path="/adminpanel" element={<AdminPage />}></Route>
            <Route path="/medAdvice" element={<MedAdvice />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
