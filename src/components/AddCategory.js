
import React, { useState } from 'react';

export const AddCategory = ( {setCategories} ) => {

  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if( inputValue.trim().length > 1) {
      setCategories( cats => [inputValue, ...cats])
      setInputValue('')
    }
    else {
      console.log('ingrese un dato')
    }
    
    
  }

  return(

    <form onSubmit={handleSubmit}>      

      <input 
          type="text" 
          value={ inputValue }
          onChange= { handleInputChange }
      />

    </form>
  )

}