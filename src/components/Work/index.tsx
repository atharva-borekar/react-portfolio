import BootstrapLogo from 'assets/images/bootstrap_logo.png';
import HtmlCssLogo from 'assets/images/html_css_logo.png';
import JavascriptLogo from 'assets/images/javascript_logo.png';
import ReactLogo from 'assets/images/react_logo.png';
import ReactQueryLogo from 'assets/images/react_query_logo.png';
import ReduxLogo from 'assets/images/redux_logo.png';
import ReduxSagaLogo from 'assets/images/redux_saga_logo.png';
import TypescriptLogo from 'assets/images/typescript_logo.png';
import { Col, Row } from 'react-bootstrap';
import TimeLine from './Timeline';
import './work.scss';

const logos = [
  {
    id: 1,
    imgSrc: ReactLogo,
    title: 'React',
    shouldSpin: true,
  },
  {
    id: 2,
    imgSrc: JavascriptLogo,
    title: 'Javscript',
    shouldSpin: false,
  },
  {
    id: 3,
    imgSrc: TypescriptLogo,
    title: 'Typescript',
    shouldSpin: false,
  },
  {
    id: 8,
    imgSrc: HtmlCssLogo,
    title: 'HTML5 / CSS3',
    shouldSpin: false,
  },
  {
    id: 4,
    imgSrc: ReactQueryLogo,
    title: 'React Query',
    shouldSpin: false,
  },
  {
    id: 5,
    imgSrc: ReduxLogo,
    title: 'Redux',
    shouldSpin: false,
  },
  {
    id: 6,
    imgSrc: ReduxSagaLogo,
    title: 'React Saga',
    shouldSpin: false,
  },
  {
    id: 7,
    imgSrc: BootstrapLogo,
    title: 'Bootstrap',
    shouldSpin: false,
  },
];

const WorkPage = () => {
  return (
    <div className='work-content'>
      <Row>
        <Col xl={8} lg={8} sm={12}>
          <TimeLine />
        </Col>
        <Col xl={4} lg={4} sm={12}>
          {logos.map(
            (logo) =>
              logo.imgSrc && (
                <img
                  key={logo.id}
                  className={`work-logo ${logo?.shouldSpin ? 'spin' : ''}`}
                  src={logo.imgSrc}
                  alt={logo.title}
                  title={logo.title}
                />
              ),
          )}
        </Col>
      </Row>
    </div>
  );
};
export default WorkPage;
