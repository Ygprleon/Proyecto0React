import React, { useEffect, useState } from 'react';
import ListaProductos from '../components/ListaProductos';
import { obtenerProductos } from '../api';

const Inicio = ({ agregarAlCarrito }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    obtenerProductos()
      .then((data) => {
        setProductos(data);
        setCargando(false);
      })
      .catch(() => {
        setError('Error al cargar los productos');
        setCargando(false);
      });
  }, []);

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Bienvenido a la tienda de mascotas</h1>
      <ListaProductos productos={productos} agregarAlCarrito={agregarAlCarrito} />
    </div>
  );
};

export default Inicio;