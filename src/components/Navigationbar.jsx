import { Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar expand="lg" className="bg-body-tertiary" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
      <Container>
        <Navbar.Brand as={Link} to="/">Cafeteria</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" onClick={() => setExpanded(false)}>Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/carta" onClick={() => setExpanded(false)}>Carta</Nav.Link>
            <Nav.Link as={NavLink} to="/carrito"onClick={() => setExpanded(false)}>Carrito</Nav.Link>
            <Nav.Link as={NavLink} to="/contacto"onClick={() => setExpanded(false)}>Formulatio Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavigationBar;