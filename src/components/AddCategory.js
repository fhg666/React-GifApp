import { useState } from "react";
import React from "react";
import PropTypes from "prop-types";


export const AddCategory = ({setCategories}) => {
   
  const [inputValue,setImputValue] = useState ('')
    
  
  const handleInputChange = (e) => {
    
    setImputValue(e.target.value);
  }
  
 const handleSumit = ( e) => {
  
    e.preventDefault();

   if(inputValue.trim().length> 1) {

   setCategories(cats => [inputValue, ...cats]);
    setImputValue('');
    }

 }

  return(
    <form onSubmit={handleSumit}>
   <input
        type = "text"
        value={inputValue}
         onChange = {handleInputChange }
        />
        </form>

    )



}

AddCategory.prototype = {

    setCategories:PropTypes.func.isRequired
}