import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/carrito');
  };

  return (
    <div className="text-center my-5">
      <h2>Iniciar Sesión</h2>
      <button className="btn btn-primary mt-3" onClick={handleLogin}>
        Iniciar Sesión
      </button>
    </div>
  );
}