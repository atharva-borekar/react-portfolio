import { createContext } from 'react';

export const themes = {
  dark: {
    type: 'dark',
    backgroundColor: 'black',
    color: 'white',
    'primary-blue': [0, 0, 255],
    'secondary-blue': [96, 96, 182],

    'text-primary-light': 'black',
    'text-primary-dark': 'white',

    'text-secondary-light': [70, 70, 70],
    'text-secondary-dark': [160, 160, 160],

    'bg-primary-light': 'white',
    'bg-primary-dark': 'black',

    'bg-secondary-light': [212, 212, 212],
    'bg-secondary-dark': [34, 34, 34],

    'bg-navbar-light': [104, 104, 255],
    'bg-navbar-dark': [29, 29, 58],
  },
  light: {
    type: 'light',
    backgroundColor: 'white',
    color: 'black',
  },
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ThemeContext = createContext({ themes, theme: themes.light, toggleTheme: () => {} });
