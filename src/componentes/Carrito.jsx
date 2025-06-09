import React from 'react';
import { ListGroup, Button, Alert } from 'react-bootstrap';
import { useCarrito } from '../context/CarritoContext';

export default function Carrito() {
  const { carrito, vaciarCarrito } = useCarrito();

  // Suma total usando el campo correcto
  const total = carrito.reduce((sum, prod) => sum + Number(prod.Precio), 0);

  return (
    <div className="mt-5">
      <h3>Carrito de compras</h3>
      {carrito.length === 0 ? (
        <Alert variant="info">El carrito está vacío</Alert>
      ) : (
        <>
          <p><strong>Cantidad de productos:</strong> {carrito.length}</p>
          <ListGroup>
            {carrito.map((prod, idx) => (
              <ListGroup.Item key={idx} className="d-flex align-items-center">
                <img
                  src={prod.Imagen}
                  alt={prod.Nombre}
                  style={{ width: 80, height: 60, objectFit: 'cover', marginRight: 16, borderRadius: 8 }}
                />
                <div>
                  <strong>{prod.Nombre}</strong> - {prod.Precio} pesos
                  <br />
                  <span style={{ color: '#666' }}>{prod.Descripción}</span>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <p className="mt-3"><strong>Total: {total} pesos</strong></p>
          <Button variant="danger" onClick={vaciarCarrito}>Vaciar Carrito</Button>
        </>
      )}
    </div>
  );
}