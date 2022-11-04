import React from 'react';
import logo from '../../assets/LOGO CORTINAS.png';
import './NavBar.css';
import { Link} from 'react-router-dom';
import NavBarDropdown from './NavBarDropdown';
import CardWidget from './cartWidget/CardWidget';

const NavBar = () => {
  return (
    <div className='contenedor'>
        <Link to="/"><img className='imgLogo' src = {logo} alt='imagenlogo'/></Link>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><NavBarDropdown/></li>
            <Link to="/carrito/"><CardWidget/></Link>  
        </ul>
    </div>
  )
}

export default NavBar