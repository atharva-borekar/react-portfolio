import AboutPage from 'components/About';
import HomePage from 'components/Home';
import ProjectsPage from 'components/Projects';
import ResumePage from 'components/Resume';
import Page from 'components/sharedComponents/navbar';
import WorkPage from 'components/Work';
import { ThemeContext, themes } from 'contexts/themeContext';
import { useState } from 'react';
import './App.css';

const ThemeProvider = (props: any) => {
  const [theme, setTheme] = useState<any>(themes.dark);
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
    <Page>
      <HomePage />
      <WorkPage />
      <ProjectsPage />
      <ResumePage />
      <AboutPage />
    </Page>
  );
}

export default App;
