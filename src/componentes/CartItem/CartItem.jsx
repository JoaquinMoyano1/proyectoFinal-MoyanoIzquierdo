import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Card, } from 'react-bootstrap';
import './CartItem.css';

const CartItem = ({ item, cantidad }) => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{item.nombre} x{cantidad}</Accordion.Header>
        <Accordion.Body>
          <Card>
            <Card.Body>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={item.img} alt={item.nombre} style={{ width: '50px', marginRight: '10px' }} />
                <div>
                  <p className="card-price">$ {item.precio}</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default CartItem;
