import React, { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import CarritoItem from './CarritoItem'
import {Link} from 'react-router-dom';
import './CarritoItemList.css'

const CarritoItemList = () => {
    const{carrito, totalCarrito, vaciarCarrito} = useContext(CarritoContext)
    return (
        <div>
            {carrito.map(cortinaEnCarrito => <CarritoItem key={cortinaEnCarrito.id} {...cortinaEnCarrito} /> )}

            <div className='contenedorMontoTotal'>
                <p>Monto Total a Pagar: $ {totalCarrito}</p>
            </div>

            <div className='contenedorBotonesCarrito'>
                <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                <Link to="/cortinas/">
                    <button>Seguir Comprando</button>
                </Link>
                <Link to="/carrito/Compra" >
                    <button>Finalizar Compra</button>
                </Link>
            </div>

        </div>
    )
}

export default CarritoItemList