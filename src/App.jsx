import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Container } from "react-bootstrap";
import "swiper/swiper.css";

import MyFooter from "./assets/components/MyFooter";
import HomePage from "./assets/components/Homepage";
import MyNavbar from "./assets/components/MyNavbvar";

function App() {
  return (
    <Container
      fluid
      className="px-0 d-flex flex-column flex-md-row min-vh-100 min-vw-100 bg-black"
    >
      <header className="flex-shrink-0">
        <MyNavbar></MyNavbar>
      </header>
      <div className="d-flex flex-column flex-grow-1 min-w-0">
        <main className="flex-grow-1">
          <HomePage></HomePage>
        </main>
        <footer fluid>
          <MyFooter></MyFooter>
        </footer>
      </div>
    </Container>
  );
}

export default App;
