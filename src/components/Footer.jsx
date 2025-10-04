import { Container, Row, Col, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-light text mt-5 pt-4">
      <Container>
        {/* Versión escritorio */}

        <Row className="d-none d-md-flex mb-4">
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">Luna & Granos Café</h5>
          </Col>
          <Col md={4} className="mb-3">
            <h6 className="fw-bold">Enlaces rápidos</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-dark text-decoration-none">Inicio</Link>
              </li>
              <li>
                <Link to="/contacto" className="text-dark text-decoration-none">Contacto</Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-dark text-decoration-none">Sobre nosotros</Link>
              </li>
            </ul>
          </Col>
          <Col md={4} className="mb-3">
            <h6 className="fw-bold">Contacto</h6>
            <p className="small mb-1">📍 Calle numero, Localidad</p>
            <p className="small mb-1">📞 numero</p>
            <p className="small mb-2">✉️ email</p>
          </Col>
        </Row>

        {/* Versión mobile con acordeones */}
        <Row className="d-md-none mb-4">
          <Col>
            <h5 className="fw-bold text-center">Luna & Granos Café</h5>
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Enlaces rápidos</Accordion.Header>
                <Accordion.Body>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/" className="text-dark text-decoration-none">Inicio</Link>
                    </li>
                    <li>
                      <Link to="/contacto" className="text-dark text-decoration-none">Contacto</Link>
                    </li>
                    <li>
                      <Link to="/nosotros" className="text-dark text-decoration-none">Sobre nosotros</Link>
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Contacto</Accordion.Header>
                <Accordion.Body>
                  <p className="small mb-1">📍 Calle numero, Localidad</p>
                  <p className="small mb-1">📞 numero telefono</p>
                  <p className="small mb-2">✉️ email</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>

        <Row>
          <Col className="text-center pb-3">
            <small>
              © 2025 Luna & Granos Café – Todos los derechos reservados
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}



