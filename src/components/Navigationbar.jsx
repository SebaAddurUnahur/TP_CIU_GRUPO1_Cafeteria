import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { useState } from "react";

function NavigationBar({ totalItems, setShowCarrito }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="./LogoCafeteriaRedondeado.png"
            alt="Logo Cafeteria"
            className="img-fluid"
            style={{ width: "60px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" onClick={() => setExpanded(false)}>
              <Button>Inicio</Button>
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/carta"
              onClick={() => setExpanded(false)}
            >
              <Button>Carta</Button>
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/reserva"
              onClick={() => setExpanded(false)}
            >
              <Button>Hacé tu reserva</Button>
            </Nav.Link>
          </Nav>
          <button
            onClick={setShowCarrito}
            className="btn position-relative"
            style={{ border: "none", background: "transparent" }}
          >
            <img
              src="carrito-de-compras.png"
              alt="Carrito"
              style={{ width: "32px", height: "32px" }}
            />
            {totalItems > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalItems}
              </span>
            )}
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;
