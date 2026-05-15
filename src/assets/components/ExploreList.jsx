import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { CaretRightFill } from "react-bootstrap-icons";

const ExploreList = () => {
  return (
    <Container fluid>
      <ListGroup className="fs-5 gap-2">
        <h1 className="text-white">Altro da Esplorare</h1>
        <ListGroupItem className="bg-dark rounded-2 d-flex justify-content-between align-items-center text-danger border-0">
          <h4>Esplora per Genere</h4>
          <CaretRightFill></CaretRightFill>
        </ListGroupItem>
        <ListGroupItem className="bg-dark rounded-2 d-flex justify-content-between align-items-center text-danger border-0">
          <h4>Decenni</h4>
          <CaretRightFill></CaretRightFill>
        </ListGroupItem>
        <ListGroupItem className="bg-dark rounded-2 d-flex justify-content-between align-items-center text-danger border-0">
          <h4>Attività e stati d'animo</h4>
          <CaretRightFill></CaretRightFill>
        </ListGroupItem>
        <ListGroupItem className="bg-dark rounded-2 d-flex justify-content-between align-items-center text-danger border-0">
          <h4>Worldwide</h4>
          <CaretRightFill></CaretRightFill>
        </ListGroupItem>
        <ListGroupItem className="bg-dark rounded-2 d-flex justify-content-between align-items-center text-danger border-0">
          <h4>Classifiche</h4>
          <CaretRightFill></CaretRightFill>
        </ListGroupItem>
        <ListGroupItem className="bg-dark rounded-2 d-flex justify-content-between align-items-center text-danger border-0">
          <h4>Audio Spaziale</h4>
          <CaretRightFill></CaretRightFill>
        </ListGroupItem>
        <ListGroupItem className="bg-dark rounded-2 d-flex justify-content-between align-items-center text-danger border-0">
          <h4>Video Musicali</h4>
          <CaretRightFill></CaretRightFill>
        </ListGroupItem>
        <ListGroupItem className="bg-dark rounded-2 d-flex justify-content-between align-items-center text-danger border-0">
          <h4>Nuovi Artisti</h4>
          <CaretRightFill></CaretRightFill>
        </ListGroupItem>
        <ListGroupItem className="bg-dark rounded-2 d-flex justify-content-between align-items-center text-danger border-0">
          <h4>Hit del passato</h4>
          <CaretRightFill></CaretRightFill>
        </ListGroupItem>
      </ListGroup>
    </Container>
  );
};

export default ExploreList;
