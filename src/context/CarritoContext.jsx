//1)Voy a importar el hook useState y createContext que me permite crear un contexto que almacenara toda la loghica de mi carrito de compras

import { useState, createContext } from "react";

//2)creamos el nuevo contexto
//Damos un valor inicial un objeto con las siguientes propiedades:

export const CarritoContext = createContext({
    carrito: [],
    total: 0,
    cantidadTotal: 0
})

//3)Creamos un componente llamado "CarritoProvider"
//En el material teorico se encuentra como proveedor de contexto

export const CarritoProvider = ({ children }) => {
    //Usamos useState para generar algunos estados para almacenar el carrito, el total y la cantidad
    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)
    //Metemos un console.log momentaneo para ver si todo se esta actualizando correctamente
    console.log(carrito)
    console.log("Monto total de la compra: ", total)
    console.log("Cantidad de Items: ", cantidadTotal)

    //4) Agregamos algunos metodos al proovedor de contexto para manipular el carrito de compras:

    //FUNCION PARA AGREGAR PRODUCTOS AL CARRITO

    const agregarAlCarrito = (item/*el item que se agrega */, cantidad /*cantidad de ese producto */) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id)

        if (!productoExistente) {
            setCarrito(prev => [...prev, { item, cantidad }])
            setCantidadTotal(prev => prev + cantidad)
            setTotal(prev => prev + (item.precio * cantidad))

            //La sintaxis: prev => [...prev, {item, cantidad}] se utiliza para crear un nuevo array a partir del estado anterior del carrito (prov) y agregar un nuevo objeto, que representa el nuevo producto
        } else {
            const carritoActualizado = carrito.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad }
                } else {
                    return prod
                }
            })
            setCarrito(carritoActualizado)
            setCantidadTotal(prev => prev + cantidad)
            setTotal(prev => prev + (item.precio * cantidad))
        }
    }



    //-FIUNCION PARA ELIMINAR PRODUCTOS DE CARRITO

    const eliminarProducto = (id) => {
        //Me guardo una referencia del producto que vamos a borrar:
        const productoEliminado = carrito.find(prod => prod.item.id === id)

        //Ahora lo elimino del carrito
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id)

        setCarrito(carritoActualizado)
        setCantidadTotal(prev => prev - productoEliminado.cantidad)
        setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad))
    }



    //-FUNCION PARA VACIAR EL CARRITO
    const vaciarCarrito = () => {
        setCarrito([])
        setCantidadTotal(0)
        setTotal(0)
    }

    //5)Usamos value para enviar el valor del carrito, total, cantidadTotal y las funciones:

    return (
        <CarritoContext.Provider value={{ carrito, total, cantidadTotal, agregarAlCarrito, eliminarProducto, vaciarCarrito }}> {children}{/*esta es la propiedad para que se pueda usar en todos los componentes necesarios del carrito, esta declarado al principio de la funcion "export const CarritoProvider = ({children}) => {" */} </CarritoContext.Provider>
    )
    //Le tenemos que agregar el children que es una propiuedad especial que utilizamos para representar todos esos componentes que pueda necesitar el carrito y sus funciones o metodos
}