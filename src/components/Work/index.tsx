import Page from 'components/sharedComponents/navbar';
import { Row } from 'react-bootstrap';
import TimeLine from './Timeline';

const WorkPage = () => {
  return (
    <Page>
      <Row>
        <TimeLine />
        {/* <Col xl={4}>
          <CustomCard />
        </Col>
        <Col xl={4}>
          <CustomCard />
        </Col>
        <Col xl={4}>
          <CustomCard />
        </Col>
        <Col xl={4}>
          <CustomCard />
        </Col>
        <Col xl={4}>
          <CustomCard />
        </Col> */}
      </Row>
    </Page>
  );
};
export default WorkPage;
