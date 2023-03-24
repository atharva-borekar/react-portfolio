import { ThemeContext } from 'contexts/themeContext';
import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import './timeline.scss';

const TimelineCard = ({ work, theme }: { work: any; theme: any }) => {
  const { type } = theme;
  console.log({ theme });
  return (
    <div className='d-flex'>
      <div className='role-start'></div>
      <Card className={`my-3 mx-3 w-100 role-card-${type}`}>
        <Card.Header className='d-flex flex-column'>
          <h2>{work.designation}</h2>
          <em>
            {work.fromDate}-{work.toDate}
          </em>
        </Card.Header>
        <Card.Body>
          <h4>Responsibilities:</h4>
          <ul>
            {work?.description?.map((responsibility: string, index: number) => {
              return (
                <li key={index} className='fw-semibold fs-5'>
                  {responsibility}
                </li>
              );
            })}
          </ul>
        </Card.Body>
        <Card.Footer>Tech Stack: {work.techStack}</Card.Footer>
      </Card>
    </div>
  );
};

const workExperience = [
  {
    id: '1',
    designation: 'Software Engineer',
    organization: 'Josh Software Pvt. Ltd.',
    fromDate: '09/2021',
    toDate: 'Present',
    description: [
      'Part of team on 3 projects (2 production stage - solo contributor, 1 development stage) following agile methodologies.',
      'Designed and created UI elements and integrated REST APIs.',
      'Performed code reviews, monitored status of project and mentored freshers.',
      'Debugging, bug fixing and code optimization.',
      'Setup deployment environment.',
    ],
    techStack:
      'ReactJs, React Redux, Redux Saga, React Query, Javascript, Typescript, Git, NPM, Yarn, React Testing Library',
  },
  {
    id: '2',
    designation: 'Software Engineer Intern',
    organization: 'Josh Software Pvt. Ltd.',
    fromDate: '01/2021',
    toDate: '07/2021',
    description: [
      'Received comprehensive training for ReactJs and worked in co-ordination with senior developers.',
      'Participated in brainstorming sessions for new feature development.',
      'Designed and created UI elements and integrated REST APIs. ',
    ],
    techStack:
      'ReactJs, React Redux, Redux Saga, Javascript, Git, NPM, Yarn, React Testing Library',
  },
  {
    id: '3',
    designation: 'React Native Developer (Internship)',
    organization: 'Josh Software Pvt. Ltd.',
    fromDate: '01/2021',
    toDate: '07/2021',
    description: [
      'Desgined screens using Figma and implemented UI on React Native.',
      'Designed UI elements and integrated REST APIs',
    ],
    techStack: 'React Native, HTML/CSS, Javascript, Git',
  },
];

const TimeLine = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className='d-flex timeline-container'>
      <div className='timeline'></div>
      <div>
        {workExperience.map((work) => (
          <TimelineCard key={work.id} work={work} theme={theme} />
        ))}
      </div>
    </div>
  );
};
export default TimeLine;
