import React from 'react'
import loader from '../../assets/Spinner-1s-200px.svg'
import './Loader.css'

const Loader = () => {
  return (
    <img className='loader' src={loader} alt= ""/>
  )
}

export default Loader