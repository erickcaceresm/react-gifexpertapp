
import React, { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => { 

  // const categories = ['Dragon Ball', 'One Piece', 'One Punch'] = no puede usarse asi a menos que no cambie nunca

  const [categories, setCategories] = useState(['Superman']);
  // const handleAdd = () => {  
  //   // setCategories( [...categories, 'Fairy Tail'] )
  //   setCategories( cats => [...cats, 'Fairy Tail'] ) 
  // }

  return(

    <>
 
      <h2>GifExpertApp</h2>
      <AddCategory setCategories = {setCategories} />
      <hr/>
          
      <ol>
        { 
          categories.map( category  => ( 
            //  <li key={category}> { category } </li>           
            <GifGrid
              key={category}
              category={category}
            />
         )) 
        }
      </ol>

    </>
  )

}

