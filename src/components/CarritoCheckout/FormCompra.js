import React, { useContext, useState } from 'react'
import { CarritoContext } from '../../context/CarritoContext';
import { toast, ToastContainer } from 'react-toastify';
import {createItem} from '../../app/api';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import './FormCompra.css'

const FormCompra = () => {
    const {carrito, totalCarrito, vaciarCarrito} = useContext(CarritoContext);
    const [comprador, setComprador] = useState({
        nombre:"",
        email:"",
        telefono:""
    })
    const {nombre, email, telefono, confirmarEmail} = comprador
    const eventoChangeInput = (e) => {
        const {name, value} = e.target
        setComprador({...comprador, [name] : value})
    }

    const eventoSubmit = (e) => {
      e.preventDefault()
      if(!comprador.nombre || !comprador.telefono || !comprador.email || !comprador.confirmarEmail){
            toast.warn('Debe ingresar todos los datos requeridos', {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }else if(comprador.email !== comprador.confirmarEmail){
            toast.warn('El email debe coincidir', {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }else{
            const productosComprados = carrito.map(e=>{return{id:e.id, nombre:e.tipoCortina + e.tipoTela, cantidad:e.quantity, precioTotal:e.precioTotal}})
            const fechaCompra = new Date()
            const totalCompra = totalCarrito
            const obj = {comprador, productosComprados, fechaCompra, totalCompra}
            createItem(obj).then(id => {
                Swal.fire(`
                <h3> ¡COMPRA FINALIZADA EXITOSAMENTE! </h3>  
                <h5> El código de tu Orden es ${id} </h5>
                <h5> Te enviaremos los detalles a tu mail: ${comprador.email} </h5> 
                <h4>¡Muchas Gracias!</h4>
                `);
            })
            setComprador({nombre:"", email:"", telefono:""})
            vaciarCarrito()
        }
    }

    return (
    <div className='container'>
        <h1 className='tituloPrincipal'>¡VAMOS A COMPRAR!</h1>
        <div className='contenedorForm'>
            <form onSubmit={eventoSubmit}>
                <h2>Datos del comprador</h2>
                <input
                    type="text"
                    name="nombre"
                    placeholder='Nombre'
                    value={nombre}
                    onChange={eventoChangeInput}
                />
                <input
                    type="number"
                    name="telefono"
                    placeholder='Teléfono'
                    value={telefono}
                    onChange={eventoChangeInput}
                />
                <input
                    type="email"
                    name="email"
                    placeholder='Email'
                    value={email}
                    onChange={eventoChangeInput}
                />
                <input
                    type="email"
                    name="confirmarEmail"
                    placeholder='Confirmar Email'
                    value={confirmarEmail || ""}
                    onChange={eventoChangeInput}
                />
                <div>
                    <button className='mt-5 mb-3' type='submit' disabled={carrito.length > 0 ? null : true}>Finalizar compra</button>
                </div> 
            </form>
            <ToastContainer/>
        </div>
    </div>
  )
}

export default FormCompra