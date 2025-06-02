import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductoDetalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  // Simula fetch a MockAPI
  useEffect(() => {
    setCargando(true);
    setError(null);
    fetch(`https://683db6e0199a0039e9e69a7a.mockapi.io/productos/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Error en la respuesta');
        return res.json();
      })
      .then(data => setProducto(data))
      .catch(() => setError('Error al cargar el producto'))
      .finally(() => setCargando(false));
  }, [id]);

  if (cargando) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <div className="container my-5">
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen} alt={producto.nombre} style={{ maxWidth: 300 }} />
      <p><strong>Precio:</strong> {producto.precio} pesos</p>
      <p><strong>ID:</strong> {producto.id}</p>
    </div>
  );
}