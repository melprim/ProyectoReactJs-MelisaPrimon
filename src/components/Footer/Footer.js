import React from 'react'
import logo from '../../assets/LOGO CORTINAS.png';
import {Link} from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
  return (
      <div className="row justify-content-around align-items-center w-100 mx-0 footer">
        <div className= "col-xl-6 col-md-12 text-center">
            <p >©2022 - Melisa Primon - Todos los derechos reservados</p>
        </div>
        <div className= "col-xl-6 col-md-12 text-center">
            <Link to="/"><img width="150px" src = {logo} alt='imagenlogo'/></Link>
        </div>
      </div>
  )
}

export default Footer