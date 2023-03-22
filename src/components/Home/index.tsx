import Page from 'components/sharedComponents/navbar';
import { ThemeContext } from 'contexts/themeContext';
import { useContext } from 'react';

const HomePage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Page>
      <h1 className={`text-${theme.color}`}>Home Page</h1>
    </Page>
  );
};
export default HomePage;
