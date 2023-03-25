import Page from 'components/sharedComponents/navbar';
import { ThemeContext } from 'contexts/themeContext';
import { useContext } from 'react';
import './about.scss';

const AboutPage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Page>
      <div className='about-content'>
        <h1 className={`about-head-name-${theme.color} text-light`}>About</h1>
        <h1 className='text-light'>Email: athessi10@gmail.com</h1>
        <h1 className='text-light'>Mobile No. 9404711811</h1>
        <h1 className='text-light'>
          LinkedIn: https://www.linkedin.com/in/atharva-borekar-30190619a/
        </h1>
        <h1 className='text-light'>Github: atharva-borekar</h1>
      </div>
    </Page>
  );
};
export default AboutPage;
