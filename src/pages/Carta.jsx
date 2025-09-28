import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Carta() {
  const productos = [
    {
      id: 1,
      nombre: "Cappuccino",
      precio: "$2.800",
      imagen: "https://picsum.photos/300/200?random=1",
      descripcion: "Café espresso con leche espumada y un toque de canela",
    },
    {
      id: 2,
      nombre: "Americano",
      precio: "$2.200",
      imagen: "https://picsum.photos/300/200?random=2",
      descripcion: "Café negro intenso, perfecto para comenzar el día",
    },
    {
      id: 3,
      nombre: "Espresso",
      precio: "$1.800",
      imagen: "https://picsum.photos/300/200?random=3",
      descripcion:
        "Shot concentrado de café puro, la base de todos nuestros cafés",
    },
    {
      id: 4,
      nombre: "Latte",
      precio: "$3.000",
      imagen: "https://picsum.photos/300/200?random=4",
      descripcion: "Café suave con leche cremosa y arte latte personalizado",
    },
    {
      id: 5,
      nombre: "Mocha",
      precio: "$3.200",
      imagen: "https://picsum.photos/300/200?random=5",
      descripcion: "Deliciosa combinación de café, chocolate y crema batida",
    },
    {
      id: 6,
      nombre: "Medialuna",
      precio: "$1.500",
      imagen: "https://picsum.photos/300/200?random=6",
      descripcion: "Medialuna francesa recién horneada, crujiente por fuera",
    },
    {
      id: 7,
      nombre: "Cheesecake",
      precio: "$2.500",
      imagen: "https://picsum.photos/300/200?random=7",
      descripcion: "Cremosa torta de queso con base de galletas y frutos rojos",
    },
    {
      id: 8,
      nombre: "Brownie de chocolate",
      precio: "$1.800",
      imagen: "https://picsum.photos/300/200?random=8",
      descripcion: "Brownie casero con chocolate intenso y nueces crocantes",
    },
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Nuestra Carta</h1>
      <Row>
        {productos.map((producto) => (
          <Col md={4} lg={3} key={producto.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={producto.imagen} />
              <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-success">
                  {producto.precio}
                </Card.Subtitle>
                <Card.Text>{producto.descripcion}</Card.Text>
                {/*HAY QUE AGREGAR LA FUNCIONALIDAD DEL BOTON*/}
                <div className="text-center">
                  <Button variant="primary">Añadir al carrito</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
