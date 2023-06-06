import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Navbar from './Navbar';
import Content from './Content';

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <Content />
      </div>
    </ThemeProvider>
  );
};

export default App;
