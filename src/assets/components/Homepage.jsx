import { Container, Row, Col } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container fluid className="d-flex flex-column gap-3 ">
      <Row>
        <Col xs={12}>
          <h1 className="text-white">Novità</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h1 className="text-white">News</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h1 className="text-white">TEST</h1>
        </Col>
      </Row>
    </Container>
  );
};
export default HomePage;
