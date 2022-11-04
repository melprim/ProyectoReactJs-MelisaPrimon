import { createContext, useState } from 'react'

const CarritoContext = createContext()

const CarritoProvider = ({children}) => {
    //Almaceno en estados
    const [carrito, setCarrito] = useState ([])
    const [totalCarrito, setTotalCarrito] = useState (0)
    const [contadorCarrito, setContadorCarrito] = useState (0)


    const actualizarContadorCarrito = () => {
        //const cantidadPorCortina = carrito.length
        //setContadorCarrito (cantidadPorCortina)
        const cantidadPorCortina = carrito.map(cortinaEnCarrito => cortinaEnCarrito.quantity)
        setContadorCarrito(cantidadPorCortina.reduce((acumulador, cantidadPorCortina) => acumulador + cantidadPorCortina, 0))
    }

    const actualizarMontoTotalCarrito = () => {
      const totalPorCortina = carrito.map(cortinaEnCarrito => cortinaEnCarrito.precioTotal) 
      setTotalCarrito(totalPorCortina.reduce((acumulador, totalesPorCortina) => acumulador + totalesPorCortina, 0))
  }


    const agregarAlCarrito = (detalleId, imagen, precio, tipoCortina, tipoTela, contador) => {
        //Si existe la cortina en el carrito cambiamos cantidad, si no pusheamos la "nueva" cortina (que aún no esta en el array).
        if(carrito.some(cortinaEnCarrito => cortinaEnCarrito.id === detalleId)){
            let cortinaExistente = (carrito.find(cortinaEnCarrito => cortinaEnCarrito.id === detalleId))
            cortinaExistente.quantity += contador
            cortinaExistente.precioTotal += cortinaExistente.precio * contador
            console.log(carrito)
        }else{
            const auxCarrito = carrito
            let nuevaCortina = {
                id: detalleId,
                imagen: imagen,
                precio: precio,
                quantity: contador,
                tipoCortina: tipoCortina,
                tipoTela: tipoTela,
                precioTotal: precio*contador
            }
            auxCarrito.push(nuevaCortina)
            setCarrito(auxCarrito)
        }
        actualizarMontoTotalCarrito()
        actualizarContadorCarrito()

    }


    // Esta sería la funcion removeItem
    const eliminarCortinaCarrito = (detalleId) => {
        const auxCarrito = carrito
        auxCarrito.splice((auxCarrito.findIndex(cortina => cortina.id === detalleId)), 1)
        setCarrito(auxCarrito)
        actualizarMontoTotalCarrito()
        actualizarContadorCarrito()
    }

    // Funcion clear() vaciamos el carrito por completo.
    const vaciarCarrito = () => {
        const auxCarrito = ([])
        setCarrito(auxCarrito)
        setContadorCarrito(0)
        setTotalCarrito(0)
    }

    return(
        <CarritoContext.Provider value = {{carrito, agregarAlCarrito, eliminarCortinaCarrito, vaciarCarrito, totalCarrito, contadorCarrito, setCarrito}}>
        {children}
        </CarritoContext.Provider>
    )


}

export  {CarritoContext, CarritoProvider}