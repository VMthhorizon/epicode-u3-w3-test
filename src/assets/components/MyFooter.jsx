import { Container, Row, Col } from "react-bootstrap";

const MyFooter = () => {
  return (
    <Container fluid className="bg-dark">
      <Row className="mb-4">
        <Col xs={3} className="mt-2">
          <h6 className="text-white ">Italian</h6>
        </Col>
        <Col xs={9} className="mt-2">
          <h6 className="text-secondary ">English(UK)</h6>
        </Col>
      </Row>
      <Row>
        <Col xs={9}>
          <h6 className="text-secondary">
            Copyright @ 2024 <span className="text-white">Apple.Inc.</span>.
            Tutti i diritti riservati.
          </h6>
        </Col>
      </Row>
      <Row xs={3}>
        <Col>
          <h6 className="text-white">Condizioni dei servizi internet</h6>
        </Col>
        <Col>
          <h6 className="text-white">Apple Music e privacy</h6>
        </Col>
        <Col>
          <h6 className="text-white">Avviso sui cookie</h6>
        </Col>
        <Col>
          <h6 className="text-white">Supporto</h6>
        </Col>
        <Col>
          <h6 className="text-white">Feedback</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
