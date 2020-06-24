
import React from "react"
import {Link} from "react-router-dom"

export default ({ handlerChange, handlerSubmit })=> {
  console.log("este es el componente tonto " )
return (

    <div className = "savbar">
        
         <h3>Busqueda de Productos</h3>
          <form className= "row" onSubmit= {handlerSubmit}>
            <div className= "col-md-3">
            <input className= "form-control" type= "text" placeholder= "Buscar Producto" label="Search product"
            onChange={handlerChange} />
            </div>
            <div>
            <button className="btn btn-primary" type="submit">Search</button>
            </div>
          </form>
          
    </div>
)
}