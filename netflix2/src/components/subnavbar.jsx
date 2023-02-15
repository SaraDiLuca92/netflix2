import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaThLarge } from "react-icons/fa";
import { FaTh } from "react-icons/fa";

function ComponentSubNav() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Tv-Shows</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Genres" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Thriller</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Romantic</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sci-Fi</NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">Anime</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <FaThLarge />
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <FaTh />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ComponentSubNav;
