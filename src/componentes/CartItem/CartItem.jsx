

const CartItem = ({ item, cantidad }) => {
    return (
        <div>
            <h3> {item.nombre}</h3>
            <p>Cantidad: {cantidad} </p>
            <p>precio: {item.precio}</p>
        </div>
    )
}

export default CartItem


{/*
<div className="container">

    
    <div className='cardProducto'>
        <img src={img} alt={nombre} />
        <h3> {item.nombre} </h3>
        <p>Cantidad: {cantidad} </p>
        <p>precio: {item.precio}</p>   
        </div>

        </div>
*/}