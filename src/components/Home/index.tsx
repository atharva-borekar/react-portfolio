import Page from 'components/sharedComponents/navbar';
import { ThemeContext } from 'contexts/themeContext';
import { useContext } from 'react';
import './home.scss';

const HomePage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Page>
      <div className='home-content'>
        <h1 className={`${'abc'} primary`}>Home Page</h1>
        <div className='home-head'>
          <div className={`home-head-text home-head-name-${theme.type}`}>Atharva Borekar</div>
          <div className={`home-head-text home-head-role-${theme.type}`}>Frontend Developer</div>
        </div>
        <div className='home-body'></div>
        <div className='home-foot'></div>
      </div>
    </Page>
  );
};
export default HomePage;
