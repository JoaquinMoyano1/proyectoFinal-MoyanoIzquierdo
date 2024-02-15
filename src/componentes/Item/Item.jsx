import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Item = ({ id, nombre, precio, img }) => {
  return (
    <Card className="cardProducto" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} alt={nombre} className="card-img" />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          $ {precio}
        </Card.Text>
        <Link to={`/item/${id}`}>
          <Button>Ver Detalles</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;
