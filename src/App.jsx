import React, { Suspense } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { ThemeProvider } from './context/ThemeContext'; // For managing the theme
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <div id="root">
        <Navbar />
        <ThemeToggle />
        <div className="main-content">
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
            <About />
            <Projects />
            <Contact />
          </Suspense>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
