import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar/NavBar'
import './Layout.css'

const Layout = () => {
  return (
    <div className='contenedorLayout'>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout