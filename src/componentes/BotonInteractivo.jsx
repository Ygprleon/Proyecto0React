import React from 'react';

export default function BotonInteractivo({ texto = "Haz clic aquí", onClick }) {
  const mostrarMensaje = () => {
    if (onClick) {
      onClick();
    } else {
      alert('¡Hola! Has hecho clic en el botón.');
    }
  };

  return (
    <button
      style={{
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '15px 32px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'background 0.3s'
      }}
      onClick={mostrarMensaje}
    >
      {texto}
    </button>
  );
}