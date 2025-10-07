import { useState, useEffect } from "react"
import { Button, Col, Form, Modal, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function FormularioContacto() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    fecha: "",
    hora: "",
  })

  const [mostrarPopUp, setMostrarPopUp] = useState(false) //controla si el modal se muestra o no
  const manejarCerrar = () => setMostrarPopUp(false);
  const manejarMostrar = () => setMostrarPopUp(true);

  const [error, setError] = useState("");
  const [enviado,setEnviado] = useState(false);
  const [formularioCompleto, setFormularioCompleto] = useState(false) // controla si el formulario está completo para habilitar el botón de reserva

  const navigate = useNavigate()

  useEffect(() => {
    const { nombre, apellido, email, telefono, fecha, hora } = formulario
    if (nombre && apellido && email && telefono && fecha && hora) {
      setFormularioCompleto(true)
    }
    else {
      setFormularioCompleto(false)
    }
  }, [formulario]) // se ejecuta cada vez que cambia el estado del formulario y cambia el estado de formularioCompleto

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const manejarSubmit = (evento) => {
    const fechaActual = new Date()
    evento.preventDefault() // previene el comportamiento por defecto del form que recarga la página
    if (!isNaN(formulario.nombre)) {
      setError("El nombre no debe contener números.");
      setEnviado(false)
      manejarMostrar()
      return
    }
    if (!isNaN(formulario.apellido)) {
      setError("El apellido no debe contener números.");
      setEnviado(false)
      manejarMostrar()
      return
    }
    if (formulario.telefono.length < 10 || isNaN(formulario.telefono)) {
      setError("El teléfono debe tener al menos 10 números.");
      setEnviado(false)
      manejarMostrar()
      return
    }
    if (!formulario.email.includes("@") || !formulario.email.includes(".")) {
      setError("El email debe ser válido.");
      setEnviado(false)
      manejarMostrar()
      return
    }
    if (new Date(formulario.fecha) < fechaActual) {
      setError("La fecha no puede ser anterior a la actual.");
      setEnviado(false)
      manejarMostrar()
      return
    }
    //HACER HORA

    setError("")
    setEnviado(true)
    manejarMostrar()
  };

  return (
    <>
      <h2 className="text-center mb-3">Hacé tu reserva</h2>
      <p className="text-muted text-center">
        Completá tus datos y elegí fecha y hora. Te confirmaremos por mail 📩
      </p>
      
      <Form onSubmit={manejarSubmit} className="container">
        <Row className="mb-3">
          <Form.Group as={Col} xs={12} md={4}>
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
          <Form.Group as={Col} xs={12} md={4}>
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
          <Form.Group as={Col} xs={12} md={4}>
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
          <Form.Group as={Col} xs={12} md={4}>
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              required
              type="tel"
              name="telefono"
              value={formulario.telefono}
              placeholder="Ej: 1122334455"
              onChange={manejarCambio}
            />
          </Form.Group>
          <Form.Group as={Col} xs={12} md={4}>
            <Form.Label>Fecha de reserva</Form.Label>
            <Form.Control
              required
              type="date"
              name="fecha"
              value={formulario.fecha}
              onChange={manejarCambio}
            />
          </Form.Group>
          <Form.Group as={Col} xs={12} md={4}>
            <Form.Label>Hora de reserva</Form.Label>
            <Form.Control
              required
              type="time"
              name="hora"
              value={formulario.hora}
              onChange={manejarCambio}
            />
          </Form.Group>
        </Row>
        <Button type="submit" onClick={manejarMostrar} disabled={!formularioCompleto}>
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
                <p>Teléfono: {formulario.telefono}</p>
                <p>Fecha: {formulario.fecha}</p>
                <p>Hora: {formulario.hora}</p>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => {
              manejarCerrar()
              if (!error) {
                navigate("/")
              }
            }}
            >
              {error ? "Cerrar" : "Ir al inicio"}
            </Button>
          </Modal.Footer>
        </Modal>
      </Form >
    </>
  )
}
export default FormularioContacto;
