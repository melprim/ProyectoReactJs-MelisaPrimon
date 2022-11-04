import React from 'react'
import { Link } from 'react-router-dom'
import './ItemAgregado.css'

const ItemAgregado = () => {
  return (
    <div className='divAgregado'>
        <h3> Cortina Agregada</h3>
        <div className='contenedorButton'>
          <Link to="/cortinas/">
              <button>Seguir Comprando</button>
          </Link>
          <Link to="/carrito/">
              <button>Ver mi Carrito</button>
          </Link>
        </div>
    </div>
  )
}

export default ItemAgregado