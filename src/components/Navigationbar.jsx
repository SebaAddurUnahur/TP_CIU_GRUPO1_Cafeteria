import { Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";
import styles from "./NavigationBar.module.css";



function NavigationBar({ totalItems, onCarritoClick }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar expand="lg" className="bg-body-tertiary" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
      <Container>
        <Navbar.Brand as={Link} to="/">Cafeteria</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav className={styles["me-auto"]}>
              <Nav.Link as={NavLink} to="/" onClick={() => setExpanded(false)}>Inicio</Nav.Link>
              <Nav.Link as={NavLink} to="/carta" onClick={() => setExpanded(false)}>Carta</Nav.Link>
              <Nav.Link as={NavLink} to="/reserva" onClick={() => setExpanded(false)}>Hacé tu reserva</Nav.Link>
            </Nav>
          </Nav>
          <button
            onClick={onCarritoClick}
            className="btn position-relative"
            style={{ border: "none", background: "transparent" }}
          >
            <img src="carrito-de-compras.png" alt="Carrito" style={{ width: "32px", height: "32px" }} />
            {totalItems > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalItems}
              </span>
            )}
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  )
}
export default NavigationBar;