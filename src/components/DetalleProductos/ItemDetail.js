import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount/ItemCount';
import './ItemDetail.css'
import { toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemAgregado from './ItemAgregado';
import { CarritoContext } from '../../context/CarritoContext';

const ItemDetail = ({detalleId, imagen, tipoCortina, tipoTela, precio, descripcion, stock, ancho, alto}) => {
    const {agregarAlCarrito} = useContext(CarritoContext)
    const [cambiarComp, setCambiarComp] = useState(true)
    function onAdd(contador){
        agregarAlCarrito(detalleId, imagen, precio, tipoCortina, tipoTela, contador)
        setCambiarComp(false)
        toast.success(`Agregaste ${contador} cortina(s) al carrito`, {
        position: "top-right",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    
    return (
    <div className=' divContenedorDetail' id={detalleId}>
        <div className='contenerImgDetalle'>
            <img src={imagen} alt=" " />
        </div>
        <div className='contenedorDetalle'>
            <div className='detalle'>
                <h2><strong className='fs-2'>Cortina: {tipoCortina} {tipoTela}</strong></h2>
                <p className='fs-3'><strong >Precio:</strong> $ {precio}</p>
                <p><strong>DESCRIPCION:</strong> {descripcion}</p>
                <p><strong>Dimensiones:</strong> {ancho}cm de ancho x {alto}cm de alto </p>
                <p><strong>Disponibles:</strong> {stock} unidades</p>
            </div>
            <div className='contenedorContador'>
                {cambiarComp ? <ItemCount stock={stock} onAdd={onAdd}/> : <ItemAgregado/>}
                <ToastContainer/>
            </div>
        </div>
    </div>
    )
}

export default ItemDetail