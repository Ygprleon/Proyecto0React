import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

export default function NavBar({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <Navbar bg="primary" variant="dark" expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">Mini eCommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            <Nav.Link as={Link} to="/acerca">Acerca de</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
            <Nav.Link as={Link} to="/carrito">Carrito</Nav.Link>
          </Nav>
          {isAuthenticated ? (
            <Button variant="outline-light" onClick={handleLogout}>Cerrar Sesión</Button>
          ) : (
            <Button variant="outline-light" as={Link} to="/login">Iniciar Sesión</Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}