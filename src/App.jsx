import React from 'react';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//IMportamos nuestro proovesor de contexto
import { CarritoProvider } from './context/CarritoContext';
//Envuelvan la aplicacion con el carritoProvider
import Cart from './componentes/Cart/Cart';
import Checkout from './componentes/Checkout/Checkout';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/checkout' element = {<Checkout/>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  )
}

export default App