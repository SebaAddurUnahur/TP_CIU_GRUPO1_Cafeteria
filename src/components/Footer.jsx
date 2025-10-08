import { Container, Row, Col, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer({ theme }) {

  const enlacesRapidos = (
    <ul className="list-unstyled">
      <li>
        <Link to="/" className="text-dark text-decoration-none">Inicio</Link>
      </li>
      <li>
        <Link to="/reserva" className="text-dark text-decoration-none">Reservas</Link>
      </li>
      <li>
        <Link to="/nosotros" className="text-dark text-decoration-none">Sobre nosotros</Link>
      </li>
    </ul>
  )

  const contacto = (
    <>
      <p className="small mb-1">📍 Calle numero, Localidad</p>
      <p className="small mb-1">
        <a href="tel:1141423239" className="text-dark text-decoration-none">📞1141423239</a>
      </p>
      <p className="small mb-2">
        <a href="mailto:cafelunaygranos@gmail.com" className="text-dark text-decoration-none">✉️ cafelunaygranos@gmail.com</a>
      </p>
    </>
  )

  return (
    <footer className="bg-light text mt-5 pt-4">
      <Container>
        {/* Versión escritorio */}

        <Row className="d-none d-md-flex mb-4"> {/*d-none hace que no se vea en mobile, d-md-flex que se vea en md en adelante*/}
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">Luna & Granos Café</h5>
          </Col>
          <Col md={4} className="mb-3">
            <h6 className="fw-bold">Enlaces rápidos</h6>
            {enlacesRapidos}
          </Col>
          <Col md={4} className="mb-3">
            <h6 className="fw-bold">Contacto</h6>
            {contacto}
          </Col>
        </Row>

        {/* Versión mobile con acordeones */}
        <Row className="d-md-none mb-4"> {/*d-md-none hace que no se vea en md en adelante*/}
          <Col>
            <h5 className="fw-bold text-center">Luna & Granos Café</h5>
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Enlaces rápidos</Accordion.Header>
                <Accordion.Body>
                  {enlacesRapidos}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Contacto</Accordion.Header>
                <Accordion.Body>
                  {contacto}
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



