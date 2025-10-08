import { Navigate, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/Navigationbar";
import Carrito from "./pages/Carrito";
import CarritoOffcanvas from "./components/CarritoOffcanvas";
import FormularioContacto from "./pages/FormularioReserva";
import Inicio from "./pages/Inicio";
import Carta from "./pages/Carta";
import Footer from "./components/Footer";
import Nosotros from "./pages/Nosotros";
import { useState, useEffect } from "react";
import FormularioReserva from "./pages/FormularioReserva";

function App() {
  const [carro, setCarro] = useState(() => {
    const carroGuardado = localStorage.getItem("carrito");
    return carroGuardado ? JSON.parse(carroGuardado) : [];
  });
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carro));
  }, [carro]);

  const [showCarrito, setShowCarrito] = useState(false); // funciona para decirle al componente de bootstrap offCanvas si se muestra o no

  const [theme, setTheme] = useState("light"); // 👈 nuevo

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const addToCarro = (producto) => {
    setCarro((prevCarro) => {
      const existeProducto = prevCarro.find((item) => item.id === producto.id);

      if (existeProducto) {
        return prevCarro.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        return [...prevCarro, { ...producto, cantidad: 1 }];
      }
    });
  };

  const totalItems = carro.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <div data-bs-theme={theme}
      className={theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}
      style={{ minHeight: "100vh", transition: "all 0.3s" }}>
      <NavigationBar
        totalItems={totalItems}
        toggleTheme={toggleTheme}
        theme={theme}
        onCarritoClick={() => setShowCarrito(true)}
      />
      <CarritoOffcanvas
        show={showCarrito}
        handleClose={() => setShowCarrito(false)}
        carro={carro}
        setCarro={setCarro}
        theme={theme}
      />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route
          path="/carta"
          element={
            <Carta
              addToCarro={addToCarro}
              handleShow={() => setShowCarrito(true)}
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
      <Footer theme={theme}/>
    </div>
  );
}

export default App;
