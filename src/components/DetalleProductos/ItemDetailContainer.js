import {React, useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';
import { getItemById } from '../../app/api';
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
  const [cortinaDetail, setCortinaDetail] = useState();  
  const {detalleId} = useParams ()


  useEffect(()=>{
    getItemById(detalleId)
    .then(cortinaDetail => setCortinaDetail(cortinaDetail))
  }, [detalleId])


  return (
        <div className='container my-5'>
            {!cortinaDetail ? <Loader/> : <ItemDetail {...cortinaDetail} />}
        </div>
  )
}

export default ItemDetailContainer;