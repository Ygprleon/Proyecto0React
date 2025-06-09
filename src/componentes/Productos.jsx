import React, { useEffect, useState } from 'react';
import { Spinner, Alert, Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';

export default function Productos({ onAgregar }) {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const { agregarAlCarrito } = useCarrito();

  
  const API_URL = "https://683db6e0199a0039e9e69a7a.mockapi.io/productos";
  const productosMostrados = productos.slice(0, 10);

  useEffect(() => {
    setCargando(true);
    setError(null);
    fetch(API_URL)
      .then(res => {
        if (!res.ok) throw new Error('Error en la respuesta');
        return res.json();
      })
      .then(data => setProductos(data))
      .catch(() => setError('Error al cargar productos, inténtalo más tarde'))
      .finally(() => setCargando(false));
  }, []);

  if (cargando) return <Spinner animation="border" role="status"><span className="visually-hidden">Cargando productos...</span></Spinner>;
  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <Row xs={1} sm={2} md={3} className="g-4">
      {productosMostrados.map(prod => (
        <Col key={prod.id}>
          <Card className="h-100">
            <Card.Img variant="top" src={prod.Imagen} alt={prod.Nombre} style={{ objectFit: 'cover', height: 180 }} />
            <Card.Body>
              <Card.Title>{prod.Nombre}</Card.Title>
              <Card.Text>
                <strong>{prod.Precio} pesos</strong>
              </Card.Text>
              <Card.Text>
                {prod.Descripción}
              </Card.Text>
              <Button variant="primary" onClick={() => agregarAlCarrito(prod)}>
                Agregar al carrito
              </Button>
              <Button as={Link} to={`/productos/${prod.id}`} variant="secondary" className="ms-2">Ver Detalle
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}