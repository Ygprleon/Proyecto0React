import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Inicio() {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4 shadow">
            <Card.Body>
              <h1 className="text-center mb-4">¡Bienvenido a Mini eCommerce!</h1>
              <p>
                En <strong>Mini eCommerce</strong> creemos que cada producto tiene una historia. Nuestra tienda nació en 2024, cuando un grupo de amigos apasionados por la tecnología y el diseño decidió crear un espacio donde la calidad y la atención personalizada fueran lo más importante.
              </p>
              <p>
                Aquí encontrarás una selección exclusiva de productos pensados para ti. Nos enorgullece ofrecerte una experiencia de compra sencilla, rápida y segura. ¡Explora nuestro catálogo y descubre todo lo que tenemos para ofrecerte!
              </p>
              <p className="text-center mt-4">
                <em>¡Gracias por visitarnos y ser parte de nuestra historia!</em>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}