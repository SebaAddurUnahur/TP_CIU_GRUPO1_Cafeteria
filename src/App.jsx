import {Navigate, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/Navigationbar"
import Carrito from "./pages/Carrito"
import FormularioContacto from "./pages/FormularioContacto"
import Inicio from "./pages/Inicio"
import Carta from "./pages/Carta"


function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/carta" element={<Carta />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/contacto" element={<FormularioContacto />} />
      </Routes>
    </>
  )
}

export default App
