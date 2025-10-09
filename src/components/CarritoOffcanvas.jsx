import { Offcanvas, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function CarritoOffcanvas({ show, setShowCarrito, carro, setCarro }) {
    const navigate = useNavigate();

    const eliminarProducto = (id) => {
        setCarro((prevCarro) => prevCarro.filter((item) => item.id !== id));
    };

    const total = carro.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    const irAlCarrito = () => {
        setShowCarrito();
        navigate("/carrito");
    };

    return (
        <Offcanvas show={show} onHide={setShowCarrito} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Tu carrito</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="cartaMenu">
                {carro.length === 0 ? (
                    <p>El carrito está vacío</p>
                ) : (
                    carro.map((item) => (
                        <div key={item.id} className="mb-3 border-bottom pb-2">
                            <p className="mb-1">
                                <strong>{item.nombre}</strong> — ${item.precio}
                            </p>
                            <p>Cantidad: {item.cantidad}</p>
                            <Button
                                variant="danger"
                                size="sm"
                                onClick={() => eliminarProducto(item.id)}
                            >
                                Eliminar
                            </Button>
                        </div>
                    ))
                )}
                {carro.length > 0 && ( //si el carrito tiene productos, muestra el total y el boton
                    <>
                        <h5>Total: ${total}</h5>
                        <Button variant="primary" onClick={irAlCarrito} className="mt-3 w-100">
                            Ir al carrito
                        </Button>
                    </>
                )}
            </Offcanvas.Body>
        </Offcanvas>
    );
}
