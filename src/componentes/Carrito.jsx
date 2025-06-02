import React from 'react';
import { ListGroup, Button, Alert } from 'react-bootstrap';

export default function Carrito({ carrito, onVaciar }) {
  const total = carrito.reduce((sum, prod) => sum + Number(prod.precio), 0);

  return (
    <div className="mt-5">
      <h3>Carrito de compras</h3>
      {carrito.length === 0 ? (
        <Alert variant="info">El carrito está vacío</Alert>
      ) : (
        <>
          <ListGroup>
            {carrito.map((prod, idx) => (
              <ListGroup.Item key={idx}>
                <strong>{prod.nombre}</strong> - {prod.precio} pesos
              </ListGroup.Item>
            ))}
          </ListGroup>
          <p className="mt-3"><strong>Total: {total} pesos</strong></p>
          <Button variant="danger" onClick={onVaciar}>Vaciar Carrito</Button>
        </>
      )}
    </div>
  );
}