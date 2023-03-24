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
import { Button, Container, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
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
            color={shouldBounce ? '#FFFFFF' : pathname === `${href}` ? '#FFFFFF' : '#1C82AD'}
          />
        </Nav.Link>
      </OverlayTrigger>
    </div>
  );
};

const SideNavbar = (props: any) => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div className='d-flex flex-row view'>
      <Navbar className='side-navbar' expand='sm'>
        <Container className='d-flex flex-column'>
          <Navbar.Brand className={`side-navbar-head text-${theme.color}`} href='/'>
            AB
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse id='basic-navbar-nav' className='align-items-end justify-content-center'>
            <Nav className='d-flex flex-column side-navbar-body'>
              <hr />
              <Navlink icon={faHouse} href='/' tag='Home' />
              <hr />
              <Navlink icon={faBriefcase} href='/work' tag='Work' />
              <hr />

              <Navlink icon={faBoxesPacking} href='/projects' tag='Projects' />
              <hr />
              <Navlink icon={faBox} href='/resume' tag='Resume' />
              <hr />
              <Navlink icon={faAddressCard} href='/about' tag='About' />
              <hr />
              <Button onClick={toggleTheme}>Toggle Theme</Button>
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
