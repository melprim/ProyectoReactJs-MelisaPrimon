import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className='container-fluid text-center'>
      <div className='cajaImagen' id="inicio">
        <h5 className='textoCentrado'>CORTINAS DECO SCREEN By Melisa</h5>
      </div>
      <div className='contenedorIntro'>
        <h1 className='tituloPrincipal'>¿POR QUÉ ELEGIR NUESTRAS CORTINAS?</h1> 
        <p className='text'> Animate a comprar online esas cortinas que estás buscando. </p>
        <p className='text'> Las podes encargar desde donde quieras y cuando quieras, sin intermediarios y con el mejor precio del mercado.</p>  
        <p className='text'>Nos destacamos por vender un producto de Calidad Premium con garantia de 5 años.</p>
      </div>
      <div className='contenedorTienda'>
        <Link to="/cortinas/"><h1 className='tituloPrincipal irATienda'>IR A NUESTRA TIENDA ON-LINE</h1> </Link>
      </div>
    </div>
  )
}

export default Home