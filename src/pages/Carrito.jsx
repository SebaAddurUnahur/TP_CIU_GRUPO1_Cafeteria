import { useNavigate } from "react-router-dom";



export default function Carrito({ carro, setCarro }) {
  const cambioDePagina = useNavigate();


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
    cambioDePagina("/FormularioPedido")

  }

  return (
    <div>
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
      {carro.length > 0 && (
        <>
          <h2>Total: ${total}</h2>
          <button onClick={confirmarCompra}>CONFIRMAR COMPRA</button>
        </>
      )}

    </div>
  );

}

