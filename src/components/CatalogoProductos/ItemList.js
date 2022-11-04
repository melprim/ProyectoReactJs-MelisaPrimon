import React from 'react'
import Item from './Item'
import Loader from '../Loader/Loader'

const ItemList = ({cortinasList}) => {

  return (
    <>
        {!cortinasList ? <Loader/> : cortinasList.map((cortinas) => <Item key={cortinas.detalleId} {...cortinas}/>)}
    </>
  )
}

export default ItemList