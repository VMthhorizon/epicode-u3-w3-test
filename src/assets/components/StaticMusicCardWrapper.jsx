import { Container, Row, Col } from "react-bootstrap";
import StaticMusicCard from "./StaticMusicCard";
import { CaretRightFill } from "react-bootstrap-icons";

const StaticMusicCardWrapper = () => {
  return (
    <Container fluid>
      <h3 className="text-start text-white d-flex align-items-center">
        Nuovi Episodi Radio <CaretRightFill></CaretRightFill>
      </h3>
      <Row xs={3} md={6}>
        <Col>
          <StaticMusicCard
            imageSrc="/public/assets/images/2a.png"
            artist="Prologo con Abuelo"
          ></StaticMusicCard>
        </Col>
        <Col>
          <StaticMusicCard
            imageSrc="/public/assets/images/2b.png"
            artist="The Wanderer"
          ></StaticMusicCard>
        </Col>
        <Col>
          <StaticMusicCard
            imageSrc="/public/assets/images/2c.png"
            artist="Michael Bublè & Carly Pearce"
          ></StaticMusicCard>
        </Col>
        <Col className="d-none d-md-flex">
          <StaticMusicCard
            imageSrc="/public/assets/images/2d.png"
            artist="Stephen Moccio: The Zane Lowe Interview"
          ></StaticMusicCard>
        </Col>
        <Col className="d-none d-md-flex">
          <StaticMusicCard
            imageSrc="/public/assets/images/2e.png"
            artist="Chart Spotlight: Julia Michaels"
          ></StaticMusicCard>
        </Col>
        <Col className="d-none d-md-flex">
          <StaticMusicCard
            imageSrc="/public/assets/images/2f.png"
            artist="Karri and Travis Mills"
          ></StaticMusicCard>
        </Col>
      </Row>
    </Container>
  );
};

export default StaticMusicCardWrapper;
