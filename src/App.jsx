import { CarritoProvider } from './context/CarritoContext';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './componentes/Navbar';
import Inicio from './componentes/Inicio';
import Productos from './componentes/Productos';
import ProductoDetalle from './componentes/ProductoDetalle'; // Nuevo componente
import Carrito from './componentes/Carrito';
import AcercaDe from './componentes/AcercaDe';
import Contacto from './componentes/Contacto';
import Layout from './componentes/Layout';
import Login from './componentes/Login'; // Nuevo componente leccion 8

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function RutaProtegida({ children }) {
    return isAuthenticated ? children : <Navigate to="/login" />;
  }

  return (
    <CarritoProvider>
      <Router>
        <NavBar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <Layout>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/productos/:id" element={<ProductoDetalle />} />
            <Route path="/carrito" element={
              <RutaProtegida>
                <Carrito />
              </RutaProtegida>
            } />
            <Route path="/acerca" element={<AcercaDe />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="*" element={<h2 className="text-center my-4">Página no encontrada</h2>} />
          </Routes>
        </Layout>
      </Router>
    </CarritoProvider>
  );
}

export default App;