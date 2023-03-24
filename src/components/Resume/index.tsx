import Page from 'components/sharedComponents/navbar';
import { ThemeContext } from 'contexts/themeContext';
import { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import './resume.scss';

const ResumePage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Page>
      <Row>
        <Col>
          <div className={`resume-head-name-${theme.color} text-light`}>
            <h1>Resume</h1>
          </div>
          <img className='resume-img' src={require('../../assets/images/resume.jpg')} />
        </Col>
        <Col>
          <h1 className={`resume-head-name-${theme.color}  text-light`}>CV</h1>
          <img className='resume-img' src={require('../../assets/images/cv.jpg')} />
        </Col>
      </Row>
    </Page>
  );
};
export default ResumePage;
