import {Navigate, Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/Navigationbar"
import Carrito from "./pages/Carrito"
import FormularioContacto from "./pages/FormularioContacto"
import Inicio from "./pages/Inicio"
import Carta from "./pages/Carta"
import Footer from "./components/Footer"
import Nosotros from "./pages/Nosotros"


function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/carta" element={<Carta />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/contacto" element={<FormularioContacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
