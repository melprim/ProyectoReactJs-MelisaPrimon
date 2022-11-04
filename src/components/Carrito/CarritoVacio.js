import React from 'react'
import { Link } from 'react-router-dom'
import './CarritoVacio.css'

export const CarritoVacio = () => {
  return (
    <div className='contenedorCarritoVacio'>
        <h3>
            Tu carrito está vacío...
        </h3>
        <div>
            <Link to="/cortinas/">
                <button>COMPRAR AHORA</button>
            </Link>
        </div>
    </div>
  )
}
