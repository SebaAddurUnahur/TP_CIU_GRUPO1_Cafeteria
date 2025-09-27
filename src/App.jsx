import { Route, Routes } from "react-router-dom"
import { Navigate } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Carrito from './pages/Carrito'
import Carta from './pages/Carta'
import Contacto from './pages/Contacto'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/carrito' element={<Carrito />} />
        <Route path='/carta' element={<Carta />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
