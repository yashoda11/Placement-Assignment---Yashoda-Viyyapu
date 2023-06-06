import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`content ${theme}`}>
      <h2>Welcome to the Website</h2>
      <p>Context API is a feature provided by React that allows data to be shared and accessed across multiple components in a React application, without the need for prop drilling. It provides a way to manage global state and pass data through the component tree without manually passing props at each level.The key components of Context API are:Context: It creates a context object that holds the shared data. It provides a way to pass the data down to the components that need it.Provider: It is responsible for providing the data to the components. It wraps the components that need access to the shared data. Consumer: It is used to consume the data provided by the Provider. It allows components to access the shared data.</p>
    </div>
  );
};

export default Content;
