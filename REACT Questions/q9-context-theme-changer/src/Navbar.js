import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar ${theme}`}>
      <h1>Context API - Website Theme Changer</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  );
};

export default Navbar;