import Page from 'components/sharedComponents/navbar';
import { ThemeContext } from 'contexts/themeContext';
import { useContext } from 'react';

const ProjectsPage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Page>
      <h1 className={`text-${theme.color}`}>Projects Page</h1>
    </Page>
  );
};
export default ProjectsPage;
