import { Modal, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'


export default function Carrito({ carro, setCarro }) {

  const [mostrarModal, setMostrarModal] = useState(false) // estado para mostrar/ocultar modal
  const cambioDePagina = useNavigate()

  useEffect(() => {
    document.title = "Luna & Granos | Carrito";
  }, [])

  const updateCantidad = (id, cantidad) => {
    setCarro((prevCarro) =>
      prevCarro.map((item) =>
        item.id === id ? { ...item, cantidad: cantidad } : item
      )
    );
  }

  const total = carro.reduce(
    (acc, item) => acc + item.precio * item.cantidad,
    0
  );

  const eliminarProducto = (id) => {
    setCarro((prevCarro) => prevCarro.filter((item) => item.id !== id));
  };

  const confirmarCompra = () => {
    setMostrarModal(true)
  }

  const cerrarModal = () => {
    setMostrarModal(false)
    setCarro([]) // vacia el carrito despues de confirmar
    cambioDePagina('/')
  }

  return (
    <div className="container">
      <h1>Tu Carrito</h1>
      {carro.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        carro.map((item) => (
          <div key={item.id}>
            <p>
              {item.nombre} - ${item.precio} x {item.cantidad}
            </p>
            <button onClick={() => updateCantidad(item.id, item.cantidad - 1)} disabled={item.cantidad <= 1}>
              -
            </button>
            <button onClick={() => updateCantidad(item.id, item.cantidad + 1)}>
              +
            </button>
            <button onClick={() => eliminarProducto(item.id)}>
              X
            </button>
          </div>
        ))
      )}
      {carro.length > 0 && (  //si el carrito tiene productos, muestra total y boton
        <>
          <h2>Total: ${total}</h2>
          <Button variant="success" onClick={confirmarCompra}>Confirmar pedido</Button>
          <Modal show={mostrarModal} onHide={cerrarModal} centered>
            <Modal.Header closeButton>
              <Modal.Title>
                ✅ Pedido confirmado
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Gracias por tu compra. Te contactaremos pronto para coordinar la entrega.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={cerrarModal}>
                Ir al inicio
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}

    </div>
  );

}

