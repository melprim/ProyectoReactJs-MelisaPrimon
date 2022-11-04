import React, { useContext} from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import './CarritoItem.css'

const CarritoItem = ({detalleId, tipoCortina, tipoTela, precio, quantity, precioTotal, imagen}) => {
    const {eliminarCortinaCarrito} = useContext (CarritoContext)
  return (
    <div id={detalleId} className='contenedorItemCarrito' >
        <div>
            <img src={imagen} alt=" " className='imagenItem'/>
        </div>
        <div>
            <h4>Cortina {tipoCortina} {tipoTela}</h4>
            <hr></hr>
            <div className='contenedorPrecioCantidad'>
                <p>Precio Unitario: $ {precio}</p>
                <p>Cantidad: {quantity} unidades </p>
                <p><strong> PRECIO TOTAL: $ {precioTotal}</strong> </p>
            </div>
        </div>
        <div>
            <button onClick={()=>eliminarCortinaCarrito(detalleId)}><i className="fas fa-trash-alt"></i></button>
        </div>
    </div>
  )
}

export default CarritoItem