import ButtonIcon from 'components/sharedComponents/ButtonIcon';
import CustomCard from 'components/sharedComponents/Card';
import { ThemeContext } from 'contexts/themeContext';
import { useContext } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { CgWebsite } from 'react-icons/cg';
import { FaGithub } from 'react-icons/fa';
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
      'Tech Stack: Node.Js, SSH2, AWS EC2',
    ],
    footer: [],
    summary:
      'React Easy Deploy is a promise driven script to help you in deploying your React.Js application with ease.',
    github: 'https://github.com/atharva-borekar/react-deploy-v1',
    website: 'https://www.npmjs.com/package/react-easy-deploy?activeTab=readme',
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
      'Tech Stack: React.Js, TypeScript, React Router, HTML/CSS, Bootstrap, SCSS',
    ],
    footer: [],
    summary:
      'A front-end developer portfolio to showcase skills, work experience. work samples, and contact information.',
    github: 'https://github.com/atharva-borekar/react-portfolio',
  },
  {
    id: 3,
    name: 'Job Referral System',
    description: [
      'The Job Referral App is a platform where companies can ask their Employees for referrals for the posts generated in the company. ',
      'The recruiters will be able to post the requirements and the Employees will be able to view the posts, ask doubts in the comments section and also post the referrals to the employer.',
      'Tech Stack: React Native, JavaScript, Java',
    ],
    footer: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    ],
    summary:
      'Mobile app made using React Native for entry at Vyomlabs Hackathon, for developing system for referrals inside organization.',
    github: 'https://github.com/atharva-borekar/jobReferralSystem',
  },

  {
    id: 4,
    name: 'The Modern Times',
    description: [
      'This project is made to be deployed in P.E.S Modern College of Engineering for better information sharing inside the college.',
      'You can make changes to this project and deploy it in your systems as well.',
      'Tech Stack: Android Studio, Android SDK, Java, XML',
    ],
    footer: [],
    summary:
      'Mobile app made using Android SDK to broadcast events and information across college.',
    github: 'https://github.com/atharva-borekar/TheModernTimes',
  },
  {
    id: 5,
    name: 'Hashgame',
    description: [
      'Install necessary npm packages.',
      'Create a production build locally.',
      'Transfer the build to the server specified.',
      'Install and configure NGINX server on AWS instance.',
      'Tech Stack: Python, Pygame, Adobe Photoshop',
    ],
    footer: [],
    summary:
      'A simple game made in Python using Pygame demonstrating the concepts of Hashing concepts',
    github: 'https://github.com/atharva-borekar/Hashgame',
  },
];

const ProjectsPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className='projects-content'>
      <h1 className={`text-${theme.color}`}>Projects</h1>
      <Row>
        {projects.map((project) => (
          <Col key={project.id} xl={3} xs={12} lg={3} className='project-card-column'>
            <CustomCard
              frontContent={
                <Card className='bg-dark project-content-front'>
                  <Card.Img
                    variant='top'
                    src={require('../../assets/images/react_logo.png')}
                    className='h-50'
                  />
                  <Card.Body className='bg-dark project-content-body'>
                    <Card.Title className='project-content-head'>{project.name}</Card.Title>
                    <Card.Text className='project-content-body-front'>{project.summary}</Card.Text>
                  </Card.Body>
                </Card>
              }
              backContent={
                <Card className='bg-dark project-content-back'>
                  <Card.Body className='bg-dark project-content-body'>
                    <Card.Title className='project-content-back-header'>{project.name}</Card.Title>
                    <Card.Text className='project-content-body-back'>
                      <ul>
                        {project.description?.map((e, index) => (
                          <li key={index}>{e}</li>
                        ))}
                      </ul>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className='project-content-back-footer'>
                    {project?.github && (
                      <ButtonIcon
                        onClick={() => {
                          window.open(project.github);
                        }}
                        Icon={FaGithub}
                        size='2em'
                      />
                    )}
                    {project?.website && (
                      <ButtonIcon
                        onClick={() => {
                          window.open(project.website);
                        }}
                        Icon={CgWebsite}
                        size='2em'
                      />
                    )}
                  </Card.Footer>
                </Card>
              }
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default ProjectsPage;
