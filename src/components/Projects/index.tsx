import CustomCard from 'components/sharedComponents/Card';
import Page from 'components/sharedComponents/navbar';
import { ThemeContext } from 'contexts/themeContext';
import { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import './projects.scss';

const projects = [
  {
    id: 1,
    name: 'React Easy Deploy',
    description: [
      'Install necessary npm packages.',
      'Create a production build locally.',
      'Transfer the build to the server specified.',
      'Install and configure NGINX server on AWS instance.',
    ],
    footer: [],
    summary:
      'React Easy Deploy is a promise driven script to help you in deploying your React.Js application with ease.',
  },
  {
    id: 2,
    name: 'Portfolio',
    description: [
      'A front-end developer portfolio to showcase skills, work experience. work samples, and contact information.',
      'Install necessary npm packages. ',
      'Create a production build locally. ',
      'Transfer the build to the server specified. ',
      'Install and configure NGINX server on AWS instance.',
    ],
    footer: [],
    summary:
      'A front-end developer portfolio to showcase skills, work experience. work samples, and contact information.',
  },
  {
    id: 3,
    name: 'Hashgame',
    description: [
      'Install necessary npm packages.',
      'Create a production build locally.',
      'Transfer the build to the server specified.',
      'Install and configure NGINX server on AWS instance.',
    ],
    footer: [],
    summary:
      'A simple game made in Python using Pygame demonstrating the concepts of Hashing concepts',
  },
  {
    id: 4,
    name: 'The Modern Times',
    description: [
      'Install necessary npm packages.',
      'Create a production build locally.',
      'Transfer the build to the server specified.',
      'Install and configure NGINX server on AWS instance.',
    ],
    footer: [],
    summary:
      'Mobile app made using Android SDK to broadcast events and information across college.',
  },
  {
    id: 5,
    name: 'Job Referral System',
    description: [
      'Install necessary npm packages.',
      'Create a production build locally.',
      'Transfer the build to the server specified.',
      'Install and configure NGINX server on AWS instance.',
    ],
    footer: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    ],
    summary:
      'Mobile app made using React Native for entry at Vyomlabs Hackathon, for developing system for referrals inside organization.',
  },
];

const ProjectsPage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Page>
      <h1 className={`text-${theme.color}`}>Projects Page</h1>
      <Row>
        {projects.map((project) => (
          <Col key={project.id}>
            <CustomCard
              frontContent={
                <div>
                  <div className='project-header-front unskew-content-front'>
                    <h1>{project.name}</h1>
                  </div>
                  <div className='project-body-front unskew-content-front mt-5'>
                    {project.summary}
                  </div>
                  <div className='project-footer-front unskew-content-front'>aaaaaaaaaa</div>
                </div>
              }
              backContent={
                <div>
                  <div className='project-header-back unskew-content-back'>
                    <h1>{project.name}</h1>
                  </div>
                  <div className='project-body-back unskew-content-back mt-5'>
                    <ul>
                      {project.description?.map((e, index) => (
                        <li key={index}>{e}</li>
                      ))}
                    </ul>
                  </div>
                  <div className='project-footer-back unskew-content-back'>aaaaaaaaaa</div>
                </div>
              }
            />
          </Col>
        ))}
      </Row>
    </Page>
  );
};
export default ProjectsPage;
