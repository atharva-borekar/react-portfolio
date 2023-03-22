import Card from 'components/sharedComponents/Card';
import Page from 'components/sharedComponents/navbar';
import { Col, Row } from 'react-bootstrap';

const WorkPage = () => {
  return (
    <Page>
      <Row>
        <Col xl={4}>
          <Card />
        </Col>
        <Col xl={4}>
          <Card />
        </Col>
        <Col xl={4}>
          <Card />
        </Col>
        <Col xl={4}>
          <Card />
        </Col>
        <Col xl={4}>
          <Card />
        </Col>
      </Row>
    </Page>
  );
};
export default WorkPage;
