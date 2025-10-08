import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Inicio() {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col xs={12} md={6} className="mb-4 mb-md-0">
          <img 
            src="/LogoCafeteria.jpg" 
            alt="Imagen principal café" 
            className="img-fluid"
          />
        </Col>
        
        <Col xs={12} md={6}>
          <h1>Bienvenidos a Luna & Granos Café</h1>
          <p>
            Descubrí el mejor café de la ciudad. Granos seleccionados,
            ambiente acogedor y la mejor atención.
          </p>
          <Button as={Link} to="/carta" variant="primary" size="lg">
            Ver nuestra Carta
          </Button>
        </Col>
      </Row>
      
      <Row className="mt-5">
        <Col>
          <h2 className="text-center mb-4">¿Por qué elegirnos?</h2>
          <Row>
            <Col md={4} className="text-center">
              <h5>Café Premium</h5>
              <p>Granos seleccionados de las mejores fincas</p>
              <img 
                src="/cafe.png"
                 alt="Imagen café" 
                className="img-fluid mb-3"
              />
            </Col>
            <Col md={4} className="text-center">
              <h5>Pastelería Fresca</h5>
              <p>Horneado diariamente por nuestros chefs</p>
              <img 
                src="/cheesecake.jpg" 
                alt="Imagen pastelería" 
                className="img-fluid mb-3"
              />
            </Col>
            <Col md={4} className="text-center">
              <h5>Ambiente Acogedor</h5>
              <p>El lugar perfecto para relajarte</p>
              <img 
                src="https://picsum.photos/500/300" 
                alt="Imagen establecimiento" 
                className="img-fluid mb-3"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
