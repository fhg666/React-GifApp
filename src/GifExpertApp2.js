import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp2 = () => {
  

  
const   [categories, setCategories] = useState( ['kenny']);  

//const handleApp = () => {
// setCategories(cats => [...cats,'malcom']);
//}

    return(
    <>
        <h2> GifExpertApp2  </h2>
         
         <AddCategory setCategories={setCategories}/>

         <hr />

            
    <ol>
        { 
         categories.map(category =>
            <GifGrid 
            category = {category} 
            key = {category}
            />
            )

        }
  </ol>



    </>
  )
}