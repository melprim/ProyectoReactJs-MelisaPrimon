import React from 'react'
import {useContext} from 'react';
import {CarritoContext} from '../../../context/CarritoContext';

const CardWidget = () => {
  const {carrito, contadorCarrito}= useContext (CarritoContext)

  return (
    <>
    <i className="fas fa-shopping-cart icono-carrito"> {carrito.length > 0 ? <p>{contadorCarrito}</p> : <p>0</p>} </i>
    </>
  )
}

export default CardWidget