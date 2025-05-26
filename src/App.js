import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carrito from './components/Carrito';
import ListaProductos from './components/ListaProductos';
import RutaProtegida from './components/RutaProtegida';
import Inicio from './pages/Inicio';
import DetallesProducto from './pages/DetallesProducto';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Cambia según tu lógica

  const agregarAlCarrito = (producto) => {
    setCartItems([...cartItems, producto]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/producto/:id" element={<DetallesProducto />} />
        <Route
          path="/carrito"
          element={
            <RutaProtegida isAuthenticated={isAuthenticated}>
              <Carrito cartItems={cartItems} />
            </RutaProtegida>
          }
        />
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>
    </Router>
  );
}

export default App;