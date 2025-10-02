import { useState } from "react";   //Falta terminar esta  en construccion
import producto from './Carta.jsx'


export default function Carrito() {
  const [setProducto] = useState([]); 

const agregarACarrito = (producto) => {
  setProducto(prev => {
    const producoExistente = buscarEnCarrito(prev, producto.id);
    return producoExistente
      ? incrementarCantidad(prev, producto.id)
      : [...prev, { ...producto, quantity: 1 }];
  });
};

const buscarEnCarrito = (carrito, id) => {
  return carrito.find(p => p.id === id);
};

const incrementarCantidad = (carrito, id) => {
  return carrito.map(p =>
    p.id === id ? { ...p, quantity: p.quantity + 1 } : p
  );
};

  return (
    <div>Carrito Luna & Granas Cafe</div>
  )
}


