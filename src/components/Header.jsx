import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import "./Rj.css";
const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> belajar Prjct</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">profil</Nav.Link>
              <Nav.Link href="#pricing">Berita</Nav.Link>
              <NavDropdown title="Tentang" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Tentang</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">informasi</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Kunjungi www.</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link eventKey={2} href="#memes"></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
