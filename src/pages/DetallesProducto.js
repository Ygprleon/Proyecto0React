import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerProductos } from '../api';

const DetallesProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerProductos()
      .then((productos) => {
        const encontrado = productos.find((p) => p.id === parseInt(id));
        setProducto(encontrado);
        setCargando(false);
      })
      .catch(() => {
        setError('Error al cargar el producto');
        setCargando(false);
      });
  }, [id]);

  if (cargando) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  return (
    <div>
      <h2>{producto.name}</h2>
      <p>Precio: ${producto.price}</p>
      {/* Aquí puedes agregar más detalles e imágenes */}
    </div>
  );
};

export default DetallesProducto;