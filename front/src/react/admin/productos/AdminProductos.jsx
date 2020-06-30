import React from "react";
import { Link } from "react-router-dom";
import ad from "../../../assets/scss/admin.scss";

export default () => {

  return (
      <div className={ad.main}>
        <section className={ad.section}>
        <article className={ad.articleAdmin}>
            <div className={ad.titleAdmin}>
                <h2>Lista de productos</h2>
                <button className={ad.buttonCreate}>Crear producto</button>
            </div>
            <table className={ad.table}>
                <tr>              
                    <th>Imagen 1</th>              
                    <th>Imagen 2</th>              
                    <th>Nombre</th>    
                    <th>Descripción</th>  
                    <th>Categoría</th>   
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Acción</th>        
                </tr>
                <tr>
                    <td><img src="./css/resident_evil_2.jpg" alt=""/></td>              
                    <td><img src="./css/resident_evil_2.jpg" alt=""/></td> 
                    <td>Resident Evil 2</td> 
                    <td className={ad.sizeDescription}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel voluptate a modi doloribus asperiores, sequi blanditiis officia quidem pariatur adipisci dolorum, amet veritatis mollitia quam quod ratione ex. Quidem, iure.</td>
                    <td>Terror</td>
                    <td>$5000</td>
                    <td>400</td>  
                    <td>
                        <button className={ad.buttonEdit}>Editar</button>
                        <button className={ad.buttonDelete}>Eliminar</button>
                    </td>
                </tr> 
                <tr>
                    <td><img src="./css/resident_evil_2.jpg" alt=""/></td>              
                    <td><img src="./css/resident_evil_2.jpg" alt=""/></td> 
                    <td>Resident Evil 2</td> 
                    <td className={ad.sizeDescription}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel voluptate a modi doloribus asperiores, sequi blanditiis officia quidem pariatur adipisci dolorum, amet veritatis mollitia quam quod ratione ex. Quidem, iure.</td>
                    <td>Terror</td>
                    <td>$5000</td>
                    <td>400</td>  
                    <td>
                        <button className={ad.buttonEdit}>Editar</button>
                        <button className={ad.buttonDelete}>Eliminar</button>
                    </td>
                </tr>
                <tr>
                    <td><img src="./css/resident_evil_2.jpg" alt=""/></td>              
                    <td><img src="./css/resident_evil_2.jpg" alt=""/></td> 
                    <td>Resident Evil 2</td> 
                    <td className={ad.sizeDescription}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel voluptate a modi doloribus asperiores, sequi blanditiis officia quidem pariatur adipisci dolorum, amet veritatis mollitia quam quod ratione ex. Quidem, iure.</td>
                    <td>Terror</td>
                    <td>$5000</td>
                    <td>400</td>  
                    <td>
                        <button className={ad.buttonEdit}>Editar</button>
                        <button className={ad.buttonDelete}>Eliminar</button>
                    </td>
                </tr>
                <tr>
                    <td><img src="./css/resident_evil_2.jpg" alt=""/></td>              
                    <td><img src="./css/resident_evil_2.jpg" alt=""/></td> 
                    <td>Resident Evil 2</td> 
                    <td className={ad.sizeDescription}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel voluptate a modi doloribus asperiores, sequi blanditiis officia quidem pariatur adipisci dolorum, amet veritatis mollitia quam quod ratione ex. Quidem, iure.</td>
                    <td>Terror</td>
                    <td>$5000</td>
                    <td>400</td>  
                    <td>
                        <button className={ad.buttonEdit}>Editar</button>
                        <button className={ad.buttonDelete}>Eliminar</button>
                    </td>
                </tr>                
            </table>
        </article>
    </section>
    </div>
  );
};
