import React from 'react'
import ItemDetailContainer from '../components/DetalleProductos/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import Layout from './Layout';
import Carrito from '../components/Carrito/Carrito';
import { CarritoProvider } from '../context/CarritoContext';
import ItemListContainer from '../components/CatalogoProductos/ItemListContainer';
import FormCompra from '../components/CarritoCheckout/FormCompra';

const Router = () => ( 
<CarritoProvider>
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route index element={<Home/>}/> 
                <Route path="/cortinas/" element={<ItemListContainer/>}/>
                <Route path="/cortinas/:tiposId" element={<ItemListContainer/>}/>
                <Route path="/detalleCortina/:detalleId" element={<ItemDetailContainer/>}/>
                <Route path='/carrito/' element={<Carrito/>} />
                <Route path='/carrito/compra' element={<FormCompra/>} />
                <Route path="*" element={<div>Error 404</div> }/>
            </Route>
        </Routes>
    </BrowserRouter> 
</CarritoProvider>  
)


export default Router