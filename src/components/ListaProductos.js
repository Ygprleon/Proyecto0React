import React from 'react';

const ListaProductos = ({ productos, agregarAlCarrito }) => (
  <div>
    <h2>Productos</h2>
    <ul>
      {productos.map((producto) => (
        <li key={producto.id}>
          {producto.name} - ${producto.price}
          <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
        </li>
      ))}
    </ul>
  </div>
);

export default ListaProductos;