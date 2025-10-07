import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";

//FALTA AGREGAR FECHA Y HORA
function FormularioContacto() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    email: "",
  });

  const [mostrarPopUp, setMostrarPopUp] = useState(false);
  const manejarCerrar = () => setMostrarPopUp(false);
  const manejarMostrar = () => setMostrarPopUp(true);

  const [error, setError] = useState("");
  const [enviado, setEnviado] = useState(false);

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const manejarSubmit = (evento) => {
    evento.preventDefault();
    if (!formulario.email.includes("@")) {
      setError("El email debe tener @");
      setEnviado(false);
      return;
    }
    setError("");
    setEnviado(true);
  };

  return (
    <Form onSubmit={manejarSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            name="nombre"
            value={formulario.nombre}
            placeholder="Nombre"
            onChange={manejarCambio}
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required
            type="text"
            name="apellido"
            value={formulario.apellido}
            placeholder="Apellido"
            onChange={manejarCambio}
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="text"
            name="email"
            value={formulario.email}
            placeholder="Email"
            onChange={manejarCambio}
          />
        </Form.Group>
      </Row>
      <Button type="submit" onClick={manejarMostrar}>
        Reservar
      </Button>
      {error && (
        <div>
          <Modal
            show={mostrarPopUp}
            onHide={manejarCerrar}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Error al reservar</Modal.Title>
            </Modal.Header>
            <Modal.Body>{error}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={manejarCerrar}>
                Cerrar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
      <Modal
        show={mostrarPopUp}
        onHide={manejarCerrar}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {error ? "Error al reservar" : "Reserva generada con éxito"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error ? (
            <p>{error}</p>
          ) : (
            <div>
              <p>Datos de la reserva:</p>
              <p>Nombre: {formulario.nombre}</p>
              <p>Apellido: {formulario.apellido}</p>
              <p>Email: {formulario.email}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={manejarCerrar}>
            {error ? "Cerrar" : "Ir al inicio"}
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
}
export default FormularioContacto;
