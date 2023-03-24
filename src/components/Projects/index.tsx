import CustomCard from 'components/sharedComponents/Card';
import Page from 'components/sharedComponents/navbar';
import { ThemeContext } from 'contexts/themeContext';
import { useContext } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './projects.scss';

const projects = [
  {
    id: 1,
    name: 'React Easy Deploy',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    footer: [],
    summary: 'aaaaaaaa',
  },
  {
    id: 2,
    name: 'Portfolio',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    footer: [],
    summary: 'aaaaaaaa',
  },
  {
    id: 3,
    name: 'Hashgame',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    footer: [],
    summary: 'aaaaaaaa',
  },
  {
    id: 4,
    name: 'The Modern Times',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    footer: [],
    summary: 'aaaaaaaa',
  },
  {
    id: 5,
    name: 'Job Referral System',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    footer: [],
    summary: 'aaaaaaaa',
  },
];

const ProjectsPage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Page>
      <h1 className={`text-${theme.color}`}>Projects Page</h1>
      <Row>
        {projects.map((project) => (
          <Col xl={6} key={project.id}>
            <CustomCard
              frontContent={
                <Card className='project-card'>
                  <Card.Header className='bg-dark'>{project.name}</Card.Header>
                  <Card.Body className='bg-dark'>{project.summary}</Card.Body>
                  <Card.Footer className='bg-dark'></Card.Footer>
                </Card>
              }
              backContent={
                <Card className='project-card'>
                  <Card.Header className='bg-dark'>
                    <h3>{project.name}</h3>
                  </Card.Header>
                  <Card.Body className='bg-dark'>{project.description}</Card.Body>
                  <Card.Footer className='bg-dark'></Card.Footer>
                </Card>
              }
            />
          </Col>
        ))}
      </Row>
    </Page>
  );
};
export default ProjectsPage;
