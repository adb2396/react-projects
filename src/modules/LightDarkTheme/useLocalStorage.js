import { useEffect, useState } from 'react';

export const ThemeEnum = {
  light: 'light',
  dark: 'dark',
};

export function useLocalStorage(key, value) {
  const [theme, setTheme] = useState(() => {
    let currValue = '';

    try {
      currValue = JSON.parse(localStorage.getItem(key)) || String(value);
    } catch (error) {
      console.log(error);
      currValue = value;
    }

    return currValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(theme));
  }, [key, theme]);

  return [theme, setTheme];
}
