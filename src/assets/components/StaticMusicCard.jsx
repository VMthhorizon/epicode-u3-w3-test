import { ExplicitFill } from "react-bootstrap-icons";
import Card from "react-bootstrap/Card";

function StaticMusicCard(props) {
  return (
    <Card
      style={{ height: 270 }}
      className="bg-transparent text-white border-0"
    >
      <Card.Img
        variant="top"
        src={props.imageSrc}
        className="object-fit-cover rounded-3"
      />
      <Card.Body className="d-flex flex-column ">
        <Card.Title className="d-flex justify-content-between">
          {props.artist}
          <ExplicitFill></ExplicitFill>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default StaticMusicCard;
