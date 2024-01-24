const productos = [
    { id: "1", nombre: "Billete de Dos pesos", precio: 500, img: "../img/colectiverodopeso.jpg", idCat: "2", stock: 100 },
    { id: "2", nombre: "Estrella de Neutrinos", precio: "3 Gúgol" , img: "../img/estrella-neutrinos.webp", idCat: "3", stock: 100 },
    { id: "3", nombre: "Una previa con Tilin", precio: 150000, img: "../img/eso-tilin.jpeg", idCat: "3", stock: 100 },
    { id: "4", nombre: "Un plan de escape...", precio: "Consultar con EXTRACTOR", img: "../img/Hoover-Max-Extract-Pressure-Pro-modelo-60.jpg", idCat: "2", stock: 100 },
    { id: "5", nombre: "una cena con la Chiqui", precio: "Diez años de juventud", img: "../img/la-chiqui.png", idCat: "3", stock: 100 },
    { id: "6", nombre: "Fideos Marolio", precio: 1500, img: "../img/fideos.jpg", idCat: "3", stock: 100 },
    { id: "7", nombre: "Martillo", precio: 4328, img: "../img/martillo.jpg", idCat: "2", stock: 100 },
    { id: "8", nombre: "EL Martillo", precio: "Una Estrella de Neutrinos", img: "../img/el-martillo.jpeg", idCat: "3", stock: 100 },
    { id: "9", nombre: "Piedra Filosofal", precio: "???", img: "../img/piedrafilo.jpeg", idCat: "2", stock: 100 },
    { id: "10", nombre: "Un troyano", precio: 15, img: "../img/rar.png", idCat: "3", stock: 100 },
    { id: "11", nombre: "Chambuchito de J&Q", precio: 340, img: "../img/sandwichjyq.jpg", idCat: "3", stock: 100 },
    { id: "12", nombre: "Boleta de Luz vencida", precio: 88000, img: "../img/luz.png", idCat: "3", stock: 100 }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}

//Retorno Item

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

//Retorno de Categoria 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}