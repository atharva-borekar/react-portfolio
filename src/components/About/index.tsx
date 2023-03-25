import Page from 'components/sharedComponents/navbar';
import { ThemeContext } from 'contexts/themeContext';
import { useContext } from 'react';
import './about.scss';

const AboutPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Page>
      <div className='about-content'>
        <h1 className={`about-head-name-${theme.color} text-light`}>About</h1>
        <h1 className='text-light'>Email: athessi10@gmail.com</h1>
        <h1 className='text-light'>Mobile No. 9404711811</h1>
        <h1 className='text-light d-flex'>
          LinkedIn:
          <div className='mx-5'>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/atharva-borekar-30590619a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BvUT96SLyRYOSDZev3Eny9g%3D%3D'
              rel='noreferrer'
            >
              https://www.linkedin.com/in/atharva-borekar-30190619a/
            </a>
          </div>
        </h1>
        <h1 className='text-light d-flex'>
          Github:
          <div className='mx-5'>
            <a target='_blank' href={'https://github.com/atharva-borekar'} rel='noreferrer'>
              atharva-borekar
            </a>
          </div>
        </h1>
      </div>
    </Page>
  );
};
export default AboutPage;
