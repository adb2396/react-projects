import React from 'react';
import { ThemeEnum, useLocalStorage } from './useLocalStorage';

import './theme.styles.css';

export default function LightDarkTheme() {
  const [theme, setTheme] = useLocalStorage('theme', ThemeEnum.dark);

  const handleThemeChange = () => {
    setTheme(theme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light);
  };

  return (
    <div className="light-dark-theme" data-theme={theme}>
      <div className="container">
        <p>Hi there!</p>
        <button type="button" onClick={handleThemeChange}>
          Change Theme
        </button>
      </div>
    </div>
  );
}
