import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
    <div>
      <Navbar bg="light" expand="sm">
        <Container>
          <Navbar.Brand href="/">
            <img
            style={{width: "100%", height:"4vh"}}
              src="/images/onlyLogo.png"
              className="d-inline-block align-top"
              alt="Dragon Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="tel:+994514556655">051-455-66-55</Nav.Link>
              <Nav.Link href="/">Əsas səhifə</Nav.Link>
              <Nav.Link href="/catalog/new">Kataloq</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </div>
  );
}

export default NavBar;
