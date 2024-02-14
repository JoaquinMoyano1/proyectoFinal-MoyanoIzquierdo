import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css';

//importamos el CarritoContext
import { CarritoContext } from '../../context/CarritoContext';
//Importo el HOOK useContext, se puede poner en el primer import de useState
import { useContext } from 'react';


const ItemDetail = ({ id, nombre, stock, precio, img }) => {
  //Cantidad de productos agregados
  const [agregarCantidad, setAgregarCantidad] = useState(0);


  ////Modificaaciones clase 11 -CONTEXT
  const { agregarAlCarrito } = useContext(CarritoContext);
  //////////


  // Creamos una función manejadora de la cantidad
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    //console.log("Productos agregados: " + cantidad);

    //Ahora voy a crear un objeto con el item y la cantidad
    const item = { id, nombre, precio }
    agregarAlCarrito(item, cantidad);
  }



  //funcion para reducir
  const decrementar = () => {
    if (agregarCantidad > 1) {
      setAgregarCantidad(agregarCantidad - 1);
    }
  }

  return (
    <div className='contenedorItem'>
      <h2> {nombre} </h2>
      <h3> {precio} </h3>
      <p> {id} </p>
      <p> {stock} </p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ea eum in consequatur nesciunt dolores nam, fugiat eligendi ipsa esse quod voluptatem accusamus facere natus! Numquam expedita ut repellendus inventore!</p>
      <img src={img} alt={nombre} />



      {/* Ajustar la lógica del contador */}
      {agregarCantidad > 0 ? (
        <div>
          <button onClick={decrementar}> - </button>
          <p> {agregarCantidad} </p>
          <button onClick={() => manejadorCantidad(agregarCantidad + 1)}> + </button>
        </div>
      ) : (
        <ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />
      )}

      {agregarCantidad > 0 ? (
        <Link to="/cart"> Terminar compra</Link>
      ) : null}
    </div>
  );
}

export default ItemDetail;