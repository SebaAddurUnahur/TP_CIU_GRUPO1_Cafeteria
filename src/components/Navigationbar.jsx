import { Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";
import styles from "./NavigationBar.module.css";



function NavigationBar({ totalItems }) {
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
              <Nav.Link as={NavLink} to="/contacto" onClick={() => setExpanded(false)}>Contactanos</Nav.Link>
              <Nav.Link as={NavLink} to="/carrito" className="position-relative" style={{ marginLeft: "20px", fontSize: "1.3rem" }} onClick={() => setExpanded(false)}> <img src="carrito-de-compras.png" alt="" style={{ width: "32px", height: "32px" }} /> <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-light" style={{fontSize: "1.3rem", transform: "translate(-10%, -10%)"}}> {totalItems}</span></Nav.Link>
          </Nav>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar >
  )
}
export default NavigationBar;