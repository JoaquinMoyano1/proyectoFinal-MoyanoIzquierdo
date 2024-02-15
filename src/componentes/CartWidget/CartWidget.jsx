import { useContext } from 'react';
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
    const { cantidadTotal } = useContext(CarritoContext);
    return (
        <div className="cart-widget">
            <Link to="/cart">
                <img className="cart-icon" src="../img/carrito.png" alt="Carrito" />
                {
                    cantidadTotal > 0 && <strong className="cart-number"> {cantidadTotal} </strong>
                }        
            </Link>
        </div>
    )
}

export default CartWidget