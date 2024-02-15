
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";


const Cart = () => {

    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext)

    if (cantidadTotal === 0) {
        return (
            <>
                <h2 > No hay productos en el carrito </h2>
                <Link to="/">
                    <Button variant="secondary" className="cart-button">
                        ver mas productos
                    </Button>
                </Link>
            </>
        )
    }

    return (
        <div>
            {carrito.map((prod) => (
                <CartItem key={prod.id} {...prod} />
            ))}
            <h3> Total: $ {total} </h3>
            <div className="cart-buttons">
                <Button variant="secondary" className="cart-button" onClick={() => vaciarCarrito()}>
                    Vaciar Carrito
                </Button>
                <Link to="/checkout">
                    <Button variant="secondary" className="cart-button">
                        Finalizar Compra
                    </Button>
                </Link>
            </div>
        </div>
    );
};


export default Cart;