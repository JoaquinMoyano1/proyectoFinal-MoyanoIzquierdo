import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({id, nombre, precio, img}) => {
  return (
    <div class="container">

    
    <div className='cardProducto'>
        <img src={img} alt={nombre} />
        <h3> {nombre} </h3>
        <p> {precio} </p>
        <Link to={`/item/${id}`}> Ver Detalles </Link>
        {/* <button> Ver Detalles </button> */}
    </div>

    </div>
  )
}

export default Item