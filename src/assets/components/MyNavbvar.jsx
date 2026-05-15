import { NavbarText } from "react-bootstrap";
import {
  Broadcast,
  HouseDoor,
  InfoSquare,
  Search,
} from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNavbar() {
  return (
    <Container fluid>
      <Navbar expand="md" data-bs-theme="dark">
        <Navbar.Toggle
          className="text-danger"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Brand href="#home">
          <img
            className="music-logo"
            src="/public/assets/logos/music.svg"
          ></img>
        </Navbar.Brand>
        <NavbarText className="text-danger">Accedi</NavbarText>

        <Navbar.Collapse className="text-danger" id="basic-navbar-nav">
          <Nav className="me-auto" className="text-danger">
            <Nav.Link
              href="#search"
              className="d-flex align-items-center gap-1"
            >
              <Search></Search> Cerca
            </Nav.Link>
            <Nav.Link href="#home" className="d-flex align-items-center gap-1">
              <HouseDoor></HouseDoor>Home
            </Nav.Link>
            <Nav.Link
              href="#novità"
              className="d-flex align-items-center gap-1"
            >
              <InfoSquare></InfoSquare> Novità
            </Nav.Link>
            <Nav.Link href="#radio" className="d-flex align-items-center gap-1">
              <Broadcast></Broadcast> Radio
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default MyNavbar;
