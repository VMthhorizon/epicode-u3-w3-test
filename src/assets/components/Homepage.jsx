import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import NewMusicCarousel from "./NewMusicCarousel";
import MusicCardWrapper from "./MusicCardWrapper";
import { useState } from "react";
import StaticMusicCardWrapper from "./StaticMusicCardWrapper";
import ExploreList from "./ExploreList";

const HomePage = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("queen");

  return (
    <Container fluid className="d-flex flex-column gap-5 ">
      <Row className="d-flex justify-content-center">
        <Col xs={12} md={11}>
          {/* SEARCHBAR */}
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              setSearchQuery(inputValue.toLowerCase());
            }}
          >
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Cerca un'artista,Ex: queen"
                aria-label="Cerca un artista"
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              />
              <Button type="submit" variant="outline-danger" id="button-addon2">
                Cerca
              </Button>
            </InputGroup>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <NewMusicCarousel></NewMusicCarousel>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <StaticMusicCardWrapper></StaticMusicCardWrapper>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <MusicCardWrapper searchQuery={searchQuery}></MusicCardWrapper>
        </Col>
      </Row>
      <Row>
        <ExploreList></ExploreList>
      </Row>
      <Row></Row>
    </Container>
  );
};
export default HomePage;
