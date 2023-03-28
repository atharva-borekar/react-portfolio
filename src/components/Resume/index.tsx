import { ThemeContext } from 'contexts/themeContext';
import { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import './resume.scss';

const ResumePage = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className='resume-content'>
      <Row>
        <Col xl={6}>
          <div className={`resume-head-name-${theme.color} text-light`}>
            <h1>Resume</h1>
          </div>
          <img className='resume-img' src={require('../../assets/images/resume.jpg')} />
        </Col>
        {/* <Col>
            <h1 className={`resume-head-name-${theme.color}  text-light`}>CV</h1>
            <img className='resume-img' src={require('../../assets/images/cv.jpg')} />
          </Col> */}
      </Row>
    </div>
  );
};
export default ResumePage;
