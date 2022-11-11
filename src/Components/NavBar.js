import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
    <div>
      <Navbar bg="light" expand="md"   style={{boxShadow:"5px 5px 5px 0px rgba(0,0,0,0.25)"}}>
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
              <Nav.Link style={{}} href="tel:+994514556655">051-455-66-55</Nav.Link>
              <Nav.Link href="/about">Haqqımızda</Nav.Link>
               <Nav.Link  href="/contact">Əlaqə</Nav.Link>
              <Nav.Link  href="/brands">Brendlər</Nav.Link>
              <Nav.Link style={{color: "rgb(206, 11, 11)"}}  href="/catalog/new">Kataloq</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </div>
  );
}

export default NavBar;
