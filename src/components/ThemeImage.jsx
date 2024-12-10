// Filename: D:\Repositories\cozy-portfolio\src\components\ThemeImage.jsx

import React, { useContext } from 'react';
import lightImage from '../assets/light.png';
import darkImage from '../assets/dark.png';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/ThemeImage.css';

function ThemeImage() {
  const { theme } = useContext(ThemeContext);
  const isDarkTheme = theme === 'dark';

  return (
    <img 
      src={isDarkTheme ? darkImage : lightImage} 
      alt="Theme Image" 
      className="theme-image" 
    />
  );
}

export default ThemeImage;