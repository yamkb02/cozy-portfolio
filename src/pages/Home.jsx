import React, { useEffect, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import "../styles/Home.css";

const SnowEffect = () => {
  useEffect(() => {
    const homeElement = document.querySelector('.home');
    const snowflakes = document.createElement("div");
    snowflakes.id = "snowflakes";
    homeElement.appendChild(snowflakes);
    const snowflakeCount = 100;
    for (let i = 0; i < snowflakeCount; i++) {
      const snowflake = document.createElement("div");
      snowflake.classList.add("snowflake");
      snowflake.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      snowflake.style.animationDuration = `${Math.random() * 10 + 5}s`; // Randomize animation speed
      snowflake.style.animationDelay = `${Math.random() * 10}s`; // Randomize start delay
      snowflakes.appendChild(snowflake);
    }
    return () => {
      snowflakes.remove();
    };
  }, []);
  return null;
};

function Home() {
  const { theme } = useContext(ThemeContext); // Access the theme context
  return (
    <div id="home" className={`home ${theme === 'dark' ? 'dark' : 'light'}`}>
      {/* Snow effect */}
      <SnowEffect />
      <div className="background-overlay"></div> 
      <div className="content">
        <h2>Mark Kenneth Badilla</h2>
        <p>Pleased to meet you. Discover my projects, learn about me, and feel free to get in touch!</p>
        <a href="#projects" className="cta-button">View My Work</a>
      </div>
    </div>
  );
}

export default Home;