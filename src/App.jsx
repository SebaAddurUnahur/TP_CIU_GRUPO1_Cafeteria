import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navigationbar";
import Carrito from "./pages/Carrito";
import CarritoOffcanvas from "./components/CarritoOffcanvas";
import Inicio from "./pages/Inicio";
import Carta from "./pages/Carta";
import Footer from "./components/Footer";
import Nosotros from "./pages/Nosotros";
import { useState, useEffect } from "react";
import FormularioReserva from "./pages/FormularioReserva";
import "../src/styles/estilos.css"

function App() {
  const [carro, setCarro] = useState(() => {
    const carroGuardado = localStorage.getItem("carrito") // busca en localstorage si esta el carrito
    return carroGuardado ? JSON.parse(carroGuardado) : [] // si esta lo parsea a un array del carrito, sino devuelve un array vacio
  })

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carro)); // cada vez que cambia el carrito, lo guarda en localstorage
  }, [carro])

  const [showCarrito, setShowCarrito] = useState(false); // funciona para decirle al componente de bootstrap offCanvas si se muestra o no

  const addToCarro = (producto) => {
    setCarro((prevCarro) => { // actualiza el estado del carrito previo
      const existeProducto = prevCarro.find((item) => item.id === producto.id);

      if (existeProducto) {
        return prevCarro.map((item) =>
          item.id === producto.id // si el id del producto ya existe en el carrito aumento la cantidad en 1 sino dejo el item igual
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prevCarro, { ...producto, cantidad: 1 }]; // si no existe el producto en el carrito, se agrega el producto con el atribuo cantidad en 1
      }
    });
  };

  const totalItems = carro.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <>
      <NavigationBar
        totalItems={totalItems}
        setShowCarrito={() => setShowCarrito(true)}
      />
      <CarritoOffcanvas
        show={showCarrito}
        setShowCarrito={() => setShowCarrito(false)}
        carro={carro}
        setCarro={setCarro}
      />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route
          path="/carta"
          element={
            <Carta
              addToCarro={addToCarro}
              setShowCarrito={() => setShowCarrito(true)}
            />
          }
        />
        <Route
          path="/carrito"
          element={<Carrito carro={carro} setCarro={setCarro} />}
        />
        <Route path="/reserva" element={<FormularioReserva />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
