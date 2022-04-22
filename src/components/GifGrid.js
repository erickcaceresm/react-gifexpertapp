// import React, { useState, useEffect } from 'react'
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem'


export const GifGrid = ( {category} ) => {

  const { data:images, loading } = useFetchGifs( category ) // desestructuración

  // useEffect( () => {
  //   getGifs( category )
  //       // .then( imgs => setImages(  imgs ))
  //       .then( setImages )
  // }, [ category ]) 

  return (

    <> 
      <h3>{category}</h3>

      {/* { loading ? 'Cargando...' : 'Carga completa'} */}
      { loading && <p>Cargando...</p> }

      <div className='card-grid'>
         {
         
          images.map( img => (
            <GifGridItem
              key={ img.id }
              // img={ img }
              { ...img }  //no usa props //
            />
          ))            
        } 
      </div>

    </>

  )

}
