import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import LandingPage from "./pages/landingPage";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";

class App extends React.Component {

  render() {

    return (
      <Router>
        <div>
          <Navigation />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/landingsPage" element={<LandingPage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
