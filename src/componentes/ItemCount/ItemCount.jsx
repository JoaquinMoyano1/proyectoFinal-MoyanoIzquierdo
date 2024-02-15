import { useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ItemCount = ({inicial, stock, funcionAgregar }) => {

    const [contador, setContador] = useState(1);


    const incrementar = () => {
      if(contador < stock) {
        setContador(contador + 1);
      }
    }

    const decrementar = () => {
      if(contador > inicial) {
        setContador(contador - 1);
      }
    }


  return (
        <>
            <ButtonGroup aria-label="Cantidad">
                <Button variant="secondary" onClick={decrementar}>-</Button>
                <Button variant="secondary">{contador}</Button>
                <Button variant="secondary" onClick={incrementar}>+</Button>
            </ButtonGroup>
            <Button variant="primary" onClick={() => funcionAgregar(contador)}>Agregar al Carrito</Button>
        </>
    );
}

export default ItemCount 
