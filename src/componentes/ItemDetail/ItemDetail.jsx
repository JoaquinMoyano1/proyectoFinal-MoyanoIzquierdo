import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import './ItemDetail.css';
import { CarritoContext } from '../../context/CarritoContext';

const ItemDetail = ({ id, nombre, stock, precio, img, descripcion }) => {
  const { agregarAlCarrito } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    const item = { id, nombre, precio, img };
    agregarAlCarrito(item, cantidad);
  }

  return (
    <Card className="text-center">
      <Card.Body className="contenedorItem">
        <Card.Title><span className="nombreProducto">{nombre}</span> ({id})</Card.Title>
        <Card.Img src={img} alt={nombre} />
        <Card.Text>
          <span className="stock"> Cantidad de unidades disponibles: {stock}</span> <br />
          <span className="precio">$ {precio}</span> <br />
          <span className="descripcion"> {descripcion}</span>
        </Card.Text>

        <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />

        <Link to="/">
          <Button variant="secondary">Ver más productos</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ItemDetail;



