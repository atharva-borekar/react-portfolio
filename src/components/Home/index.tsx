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
          <Button variant='outline-secondary'>ABC</Button>
        </div>
        <div className='home-body'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Sed risus pretium quam vulputate dignissim. Senectus et
          netus et malesuada fames ac turpis egestas. Ornare arcu odio ut sem. Tellus elementum
          sagittis vitae et leo. Scelerisque in dictum non consectetur a. Pellentesque dignissim
          enim sit amet. Lorem ipsum dolor sit amet consectetur adipiscing elit. Potenti nullam ac
          tortor vitae purus faucibus ornare suspendisse. Iaculis eu non diam phasellus vestibulum
          lorem sed. Lectus sit amet est placerat. Risus nec feugiat in fermentum posuere. Quis
          ipsum suspendisse ultrices gravida dictum fusce. Amet consectetur adipiscing elit
          pellentesque habitant morbi tristique senectus. Risus in hendrerit gravida rutrum quisque
          non tellus orci. Vulputate enim nulla aliquet porttitor. Amet justo donec enim diam
          vulputate. Elit ut aliquam purus sit. Nulla at volutpat diam ut venenatis tellus in metus
          vulputate. Enim facilisis gravida neque convallis a cras semper auctor. Enim neque
          volutpat ac tincidunt vitae semper. Varius quam quisque id diam vel quam elementum
          pulvinar etiam. Porttitor rhoncus dolor purus non enim praesent. // Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Sed risus pretium quam vulputate dignissim. Senectus et netus et malesuada
          fames ac turpis egestas. Ornare arcu odio ut sem. Tellus elementum sagittis vitae et leo.
          Scelerisque in dictum non consectetur a. Pellentesque dignissim enim sit amet. Lorem ipsum
          dolor sit amet consectetur adipiscing elit. Potenti nullam ac tortor vitae purus faucibus
          ornare suspendisse. Iaculis eu non diam phasellus vestibulum lorem sed. Lectus sit amet
          est placerat. Risus nec feugiat in fermentum posuere. Quis ipsum suspendisse ultrices
          gravida dictum fusce. Amet consectetur adipiscing elit pellentesque habitant morbi
          tristique senectus. Risus in hendrerit gravida rutrum quisque non tellus orci. Vulputate
          enim nulla aliquet porttitor. Amet justo donec enim diam vulputate. Elit ut aliquam purus
          sit. Nulla at volutpat diam ut venenatis tellus in metus vulputate. Enim facilisis gravida
          neque convallis a cras semper auctor. Enim neque volutpat ac tincidunt vitae semper.
          Varius quam quisque id diam vel quam elementum pulvinar etiam. Porttitor rhoncus dolor
          purus non enim praesent.
        </div>
        <div className='home-foot'></div>
      </div>
    </Page>
  );
};
export default HomePage;
