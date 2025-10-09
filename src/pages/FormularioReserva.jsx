import { useState, useEffect } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function FormularioReserva() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    fecha: "",
    hora: "",
    mensaje: ""
  });

  const [mostrarPopUp, setMostrarPopUp] = useState(false); //controla si el modal se muestra o no
  const manejarCerrar = () => setMostrarPopUp(false);
  const manejarMostrar = () => setMostrarPopUp(true);

  const [error, setError] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [formularioCompleto, setFormularioCompleto] = useState(false); // controla si el formulario está completo para habilitar el botón de reserva

  const navigate = useNavigate()

  useEffect(() => {
    document.title = "Luna & Granos | Reserva"
  }, [])

  useEffect(() => {
    const { nombre, apellido, email, telefono, fecha, hora } = formulario;
    if (nombre && apellido && email && telefono && fecha && hora) {
      setFormularioCompleto(true);
    } else {
      setFormularioCompleto(false);
    }
  }, [formulario]); // se ejecuta cada vez que cambia el estado del formulario y cambia el estado de formularioCompleto

  const manejarCambio = (e) => { // actualiza el estado del formulario
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value
    });
  };

  const manejarSubmit = (evento) => {
    evento.preventDefault(); // previene el comportamiento por defecto del form que recarga la página
    const fecha = new Date()
    const año = `${fecha.getFullYear()}`
    const mes = fecha.getMonth() + 1
    const mesNormalizado = mes<9 ? `0${mes}` : `${mes}` //Le agrega un 0 al mes en caso de que sea mes menor a 10 -> Ej: Pasa de 9 a 09
    const dia = fecha.getDate()
    const diaNormalizado = dia<9 ? `0${dia}` : `${dia}` //Le agrega un 0 al dia en caso de que sea mes menor a 10 -> Ej: Pasa de 9 a 09
    const fechaActual = año + `-` + mesNormalizado + `-` + diaNormalizado //Se arma la fecha actual para que coincida con la que devuelve el input del form

    if (!isNaN(formulario.nombre)) { // isNaN devuelve true si no es un numero
      setError("El nombre no debe contener números.");
      setEnviado(false);
      manejarMostrar();
      return;
    }
    if (!isNaN(formulario.apellido)) {
      setError("El apellido no debe contener números.");
      setEnviado(false);
      manejarMostrar();
      return;
    }
    if (formulario.telefono.length < 10 || isNaN(formulario.telefono)) {
      setError("El teléfono debe tener al menos 10 números.");
      setEnviado(false);
      manejarMostrar();
      return;
    }
    if (!formulario.email.includes("@") || !formulario.email.includes(".")) {
      setError("El email debe ser válido.");
      setEnviado(false);
      manejarMostrar();
      return;
    }
    if (formulario.fecha < fechaActual) {
      //console.log(formulario.fecha)
      //console.log(fechaActual)
      setError("La fecha no puede ser anterior a la actual.");
      setEnviado(false);
      manejarMostrar();
      return;
    }
    if (formulario.hora < "07:00" || formulario.hora > "20:00") {
      setError("El horario de la cafetería es de 07:00 a 20:00")
      setEnviado(false);
      manejarMostrar();
      return;
    }
    // Si pasan todas las validaciones, setea el error en vacio y muestra el modal de éxito
    setError("");
    setEnviado(true);
    manejarMostrar();
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
              placeholder="algo@email."
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
          <Form.Group as={Col} xs={12}>
            <Form.Label>Mensaje o detalle que necesitemos saber (opcional)</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="mensaje"
              value={formulario.mensaje}
              placeholder="Escribí aquí tu mensaje..."
              onChange={manejarCambio}
            />
          </Form.Group>
        </Row>
        <Button
          variant="primary"
          type="submit"
          onClick={manejarMostrar}
          disabled={!formularioCompleto}
          className="mb-5"
        >
          Reservar
        </Button>
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
                {formulario.mensaje && <p>Mensaje: {formulario.mensaje}</p>}
                <p className="mt-3">
                  ¡Gracias por elegirnos! Te esperamos en Luna & Granos ☕
                </p>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>         
              <Button
              variant="secondary"
              onClick={() => {
                manejarCerrar();
                if (!error) { // si no hay error, activa la navegacion en el boton Ir al inicio
                  navigate("/");
                }
              }}
            >
              {error ? "Cerrar" : "Ir al inicio"}
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </>
  );
}
export default FormularioReserva;
