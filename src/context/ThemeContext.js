import React, {createContext, useContext, useState} from 'react';
import {COLORS} from '../constants/colors';

const ThemeContext = createContext(null);

export function ThemeProvider({children}) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(current => (current === 'light' ? 'dark' : 'light'));
  };

  const colors = COLORS[theme];

  return (
    <ThemeContext.Provider value={{theme, colors, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}