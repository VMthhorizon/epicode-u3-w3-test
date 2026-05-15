import { ExplicitFill } from "react-bootstrap-icons";
import Card from "react-bootstrap/Card";

function MusicCard(props) {
  return (
    <Card
      style={{ height: 310 }}
      className="bg-transparent text-white border-0"
    >
      <Card.Img
        variant="top"
        src={props.elem.album.cover_medium}
        className="object-fit-cover rounded-3"
      />
      <Card.Body className="d-flex flex-column justify-content-between ">
        <Card.Title className="d-flex justify-content-between">
          {props.elem.title_short}
          <ExplicitFill></ExplicitFill>
        </Card.Title>
        <Card.Text className="text-secondary">
          {props.elem.artist.name}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MusicCard;
