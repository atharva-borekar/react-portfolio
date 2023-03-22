import { ThemeContext, themes } from 'contexts/themeContext';
import { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from 'root/routes';
import './App.css';

const ThemeProvider = (props: any) => {
  const [theme, setTheme] = useState(themes.light);
  const toggleTheme = () => {
    if (theme.type === 'dark') {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
  };
  return (
    <ThemeContext.Provider value={{ themes, theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
