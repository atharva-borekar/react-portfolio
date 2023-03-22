import { createContext } from 'react';

export const themes = {
  dark: {
    type: 'dark',
    backgroundColor: 'black',
    color: 'white',
  },
  light: {
    type: 'light',
    backgroundColor: 'white',
    color: 'black',
  },
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ThemeContext = createContext({ themes, theme: themes.light, toggleTheme: () => {} });
