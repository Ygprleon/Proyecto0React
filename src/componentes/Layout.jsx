import React from 'react';

export default function Layout({ children, cantidadCarrito = 0 }) {
  return (
    <div>
      <header className="bg-primary text-white p-3 d-flex justify-content-between align-items-center">
        <h1 className="m-0 text-center w-100">Mini eCommerce</h1>
        <div style={{ position: 'absolute', right: 30 }}>
          <i className="fi fi-rr-shopping-cart" style={{ fontSize: 32 }}></i>
          {cantidadCarrito > 0 && (
            <span className="badge bg-danger" style={{ position: 'absolute', top: -8, right: -8 }}>
              {cantidadCarrito}
            </span>
          )}
        </div>
      </header>
      <main className="container my-4">{children}</main>
      <footer className="text-center text-muted py-3">
        &copy; {new Date().getFullYear()} Mini eCommerce
      </footer>
    </div>
  );
} 