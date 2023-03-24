import Page from 'components/sharedComponents/navbar';
import { ThemeContext } from 'contexts/themeContext';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import './home.scss';

const HomePage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Page>
      <div className='home-content'>
        <div className='home-head'>
          <div className={`home-head-text home-head-name-${theme.type}`}>Atharva Borekar</div>
          <div className={`home-head-text home-head-role-${theme.type}`}>Frontend Developer</div>
          <Button disabled variant='outline-warning' className='mx-2'>
            React.Js
          </Button>
          <Button disabled variant='outline-warning' className='mx-2'>
            JavaScript
          </Button>
          <Button disabled variant='outline-warning' className='mx-2'>
            TypeScript
          </Button>
          <Button disabled variant='outline-warning' className='mx-2'>
            HTML / CSS
          </Button>
        </div>
        <div className='home-body'>
          An avid person who is always curious about the working of technology around him. Technical
          skills:- JavaScript, TypeScript, ReactJS, Git, Redux, Redux Saga, React Query, React
          Testing Library. Possess good communication skills and flexible to work in any environment
          as required.
        </div>
        <div className='home-foot'></div>
      </div>
    </Page>
  );
};
export default HomePage;
