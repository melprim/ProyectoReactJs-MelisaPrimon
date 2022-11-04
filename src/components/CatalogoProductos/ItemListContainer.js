import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getItems } from '../../app/api';


const ItemListContainer = () => {

  const[cortinasList, setCortinasList] = useState()
  const[titulo, setTitulo]= useState()
  const{tiposId} = useParams()
  
  useEffect(()=> {
    if(tiposId){
      getItems() 
      .then(res => setCortinasList(res.filter((res) => res.tipoCortina === tiposId)))
      setTitulo(`Cortinas ${tiposId}`)
    }else{
      getItems() 
      .then(res => setCortinasList(res))
      setTitulo('TIENDA DE CORTINAS ON-LINE')
    }  
  }, [tiposId])

  return (
    <> 
      <div className='contenedorProductos'>
        <h1 className='tituloPrincipal'>{titulo}</h1>
        <div className='listaProductos'>
          {<ItemList cortinasList={cortinasList} />}
        </div>
      </div>
    </>
  );
}

export default ItemListContainer
