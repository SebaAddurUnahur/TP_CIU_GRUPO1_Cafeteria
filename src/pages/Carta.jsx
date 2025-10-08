import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import { useSearchParams } from "react-router-dom"
import { useEffect } from "react"


export default function Carta({ addToCarro, setShowCarrito }) {
  
  useEffect(() => {
    document.title = "Luna & Granos | Carta";
  }, [])

  const productos = [

    {
      id: 1,
      nombre: "Cappuccino",
      precio: 2800.00,
      imagen: "/cafe.png",
      descripcion: "Café espresso con leche espumada y un toque de canela",
      categoria: "Bebida"
    },
    {
      id: 2,
      nombre: "Americano",
      precio: 2200.00,
      imagen: "/Americano.png",
      descripcion: "Café negro intenso, perfecto para comenzar el día",
      categoria: "Bebida"
    },
    {
      id: 3,
      nombre: "Ristretto",
      precio: 1800.00,
      imagen: "/Ristretto.png",
      descripcion:
        "Shot concentrado de café puro, la base de todos nuestros cafés",
      categoria: "Bebida"
    },
    {
      id: 4,
      nombre: "Latte",
      precio: 3000.00,
      imagen: "/Latte.png",
      descripcion: "Café suave con leche cremosa y arte latte personalizado",
      categoria: "Bebida"
    },
    {
      id: 5,
      nombre: "Mocha",
      precio: 3200.00,
      imagen: "/Mocha.png",
      descripcion: "Deliciosa combinación de café, chocolate y crema batida",
      categoria: "Bebida"
    },
    {
      id: 6,
      nombre: "Medialuna",
      precio: 1500.00,
      imagen: "/medialuna.jpg",
      descripcion: "Medialuna francesa recién horneada, crujiente por fuera",
      categoria: "Comida"
    },
    {
      id: 7,
      nombre: "Cheesecake",
      precio: 2500.00,
      imagen: "/cheesecake.jpg",
      descripcion: "Cremosa torta de queso con base de galletas y frutos rojos",
      categoria: "Comida"
    },
    {
      id: 8,
      nombre: "Brownie de chocolate",
      precio: 1800.00,
      imagen: "browni.jpg",
      descripcion: "Brownie casero con chocolate intenso y nueces crocantes",
      categoria: "Comida"
    },
  ];


  const abrirCanvas = (producto) => {
    addToCarro(producto)
    setShowCarrito()
  }
  const [searchParams, setSearchParams] = useSearchParams()
  const filtro = searchParams.get("categoria") ?? "todos" // si no hay ningun parametro en la url, por defecto es "todos"
  const productosFiltrados = filtro === "todos" ? productos : productos.filter(producto => producto.categoria === filtro)
  return (
    <Container className="my-5">

      <h1 className="text-center mb-4">Nuestra Carta</h1>

      <div className="text-center mb-4">
        <ButtonGroup>
          <Button variant={filtro === "todos" ? "dark" : "outline-dark"} onClick={() => setSearchParams({ categoria: "todos" })}>
            Todos
          </Button>
          <Button variant={filtro === "Bebida" ? "dark" : "outline-dark"} onClick={() => setSearchParams({ categoria: "Bebida" })}>
            Bebidas
          </Button>
          <Button variant={filtro === "Comida" ? "dark" : "outline-dark"} onClick={() => setSearchParams({ categoria: "Comida" })}>
            Comidas
          </Button>
        </ButtonGroup>
      </div>
      <Row>
        {productosFiltrados.map((producto) => (
          <Col md={4} lg={3} key={producto.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={producto.imagen} className="product-img" />
              <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-success">
                  ${producto.precio}
                </Card.Subtitle>
                <Card.Text>{producto.descripcion}</Card.Text>
                <div className="text-center">
                  <Button variant="primary" onClick={() => abrirCanvas(producto)}>Añadir al carrito</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </Container>

  );
}
