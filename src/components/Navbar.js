import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/carrito">Carrito</Link></li>
    </ul>
  </nav>
);

export default Navbar;