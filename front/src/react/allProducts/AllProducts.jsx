import React from "react";

export default ({product}) => {
    console.log(product)
  return (
    <div>
      <h1>Bienvenido a todos los Productos</h1>

      <div>
    <ul>
      {product.length >1 ? (product.map(product=>{
          
          return (
            <li key={product.name}> 
              
             
              
            </li>
          )
      })): (<li>Bienvenido!</li>) }
    </ul>
    </div>


    </div>
  );
};
