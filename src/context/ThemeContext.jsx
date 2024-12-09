import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Set fallback theme and body background color
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    // Immediately apply the theme to the body
    document.body.setAttribute('data-theme', savedTheme);

    // Initially set background to black, then apply theme
    document.body.classList.add('theme-loading');

    // Once the theme is set, apply the theme-loaded class
    setTimeout(() => {
      document.body.classList.remove('theme-loading');
      document.body.classList.add('theme-loaded');
    }, 300); // Wait for the transition to complete

  }, []); // Run only on mount

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
