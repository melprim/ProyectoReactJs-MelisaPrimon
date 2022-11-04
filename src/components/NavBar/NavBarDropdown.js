import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBarDropdown = (tipoId) => {
    return (
    <div className="dropdown">
        <button className="btn dropdown-toggle p-0 border-0 shadow-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><Link to="/cortinas/"> Nuestras Cortinas</Link></button>
        
        <ul className="dropdown-menu h-auto" aria-labelledby="dropdownMenuButton1">
            <Link to="/cortinas/" className="dropdown-item">Todas</Link>
            <li><hr className="dropdown-divider" /></li>
            <Link to="/cortinas/Roller/" className="dropdown-item">Roller</Link>
            <Link to="/cortinas/Bandas Verticales/" className="dropdown-item">Bandas Verticales</Link>
            <Link to="/cortinas/Duo/" className="dropdown-item">Duo</Link>
        </ul>
    </div>
    )
}

export default NavBarDropdown