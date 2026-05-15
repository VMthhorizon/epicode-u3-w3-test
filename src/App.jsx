import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Container } from "react-bootstrap";
import MyFooter from "./assets/components/MyFooter";
import HomePage from "./assets/components/Homepage";
import MyNavbar from "./assets/components/MyNavbvar";

function App() {
  return (
    <Container
      fluid
      className="px-0 d-flex flex-column flex-md-row min-vh-100 bg-dark"
    >
      <header>
        <MyNavbar></MyNavbar>
      </header>
      <main className="flex-grow-1 my-3">
        <HomePage></HomePage>
      </main>
      <footer>
        <MyFooter></MyFooter>
      </footer>
    </Container>
  );
}

export default App;
