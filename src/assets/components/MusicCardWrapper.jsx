import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MusicCard from "./MusicCard";
import { CaretRightFill } from "react-bootstrap-icons";

const MusicCardWrapper = (props) => {
  const [arrSongs, setArrSongs] = useState(null);
  const [isError, setisError] = useState(false);

  const getSongs = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/deezer/search?q=${props.searchQuery}`,
      );
      if (response.ok) {
        const data = await response.json();

        setArrSongs(data);
      } else {
        console.log("ERRORE JSON", response.status);
        setisError(true);
      }
    } catch (error) {
      console.log("ERRORE SERVER", error);
      setisError(true);
    }
  };

  useEffect(() => {
    getSongs();
  }, [props.searchQuery]);

  return (
    <Container fluid>
      <h3 className="text-start text-white d-flex align-items-center">
        Nuove uscite <CaretRightFill></CaretRightFill>
      </h3>
      <Row xs={3} md={5} className="g-3">
        {isError ? (
          <h1 className="fs1 text-center">
            NESSUN ARTISTA TROVATO, PROVA DI NUOVO
          </h1>
        ) : (
          arrSongs?.data.slice(0, 6).map((elem, i) => {
            return (
              <Col key={elem.id} className={i === 5 ? "d-md-none" : ""}>
                <MusicCard elem={elem} />
              </Col>
            );
          })
        )}
      </Row>
    </Container>
  );
};

export default MusicCardWrapper;
