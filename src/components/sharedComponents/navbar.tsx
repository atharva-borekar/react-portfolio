import {
  faAddressCard,
  faBox,
  faBoxesPacking,
  faBriefcase,
  faHouse,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from 'contexts/themeContext';
import { useContext, useState } from 'react';
import { Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import router from 'root/routes';
import './navbarDark.scss';

const Navlink = ({ icon, href, tag }: { icon: any; href: any; tag: any }) => {
  const [shouldBounce, setShouldBounce] = useState(false);
  const startBounce = () => setShouldBounce(true);
  const stopBounce = () => setShouldBounce(false);

  const renderTooltip = (props: any) => {
    return (
      <Tooltip id='button-tooltip' {...props}>
        {tag}
      </Tooltip>
    );
  };
  const { pathname } = useLocation();

  return (
    <div className='d-flex justify-content-center align-items-center'>
      <OverlayTrigger
        onEnter={startBounce}
        onExit={stopBounce}
        placement='right'
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <Nav.Link
          className='my-3 side-navbar-link'
          href={href}
          onClick={() => router.navigate(href)}
          active={Boolean(location)}
        >
          <FontAwesomeIcon
            size={'2x'}
            icon={icon}
            bounce={shouldBounce}
            className={`${
              shouldBounce ? '#FFFFFF' : pathname === `${href}` ? '#FFFFFF' : 'text-warning'
            }`}
          />
        </Nav.Link>
      </OverlayTrigger>
    </div>
  );
};

const SideNavbar = (props: any) => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div className='view'>
      <Navbar className='side-navbar' expand='sm'>
        <Container className='d-flex justify-content-between'>
          <Navbar.Brand className={`side-navbar-head text-${theme.color}`} href='/'>
            AB
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='d-flex side-navbar-body'>
              <div className='vl'></div>
              <Navlink icon={faHouse} href='/' tag='Home' />
              <div className='vl'></div>
              <Navlink icon={faBriefcase} href='/work' tag='Work' />
              <div className='vl'></div>

              <Navlink icon={faBoxesPacking} href='/projects' tag='Projects' />
              <div className='vl'></div>
              <Navlink icon={faBox} href='/resume' tag='Resume' />
              <div className='vl'></div>
              <Navlink icon={faAddressCard} href='/about' tag='About' />
              <div className='vl'></div>
              {/* <Button onClick={toggleTheme}>Toggle Theme</Button> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='content-body'>{props?.children}</div>
    </div>
  );
};

export const withSideNavbar = (wrappedComponent: any) => {
  return <SideNavbar>{wrappedComponent.children}</SideNavbar>;
};

const Page = (component: any) => withSideNavbar(component);

export default Page;
