import React from 'react'

const CartItem = ({item, cantidad, img}) => {
  return (
    <div>
        <img src={item.img} alt={item.nombre} />
        <h3> {item.nombre}  </h3>
        <p> Cantidad: {cantidad} </p>
        <p> Precio: {item.precio} </p>
    </div>
  )
}

export default CartItem