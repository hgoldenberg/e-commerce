import React from "react";
import { Link } from "react-router-dom";
import ad from "../../../assets/scss/admin.scss";

export default () => {

  return (
      <div className={ad.main}>
        <section className={ad.section}>
        <article className={ad.articleAdmin}>
            <div className={ad.titleAdmin}>
                <h2>Lista de órdenes</h2>
            </div>
            <table className={ad.table}>
                <tr>       
                    <th>Carrito</th>       
                    <th>Imagen</th> 
                    <th>Usuario</th>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>estado</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td><img src="./css/resident_evil_2.jpg" alt="" /></td>
                    <td>Ariel Blas</td>
                    <td>Resident Evil 2</td>
                    <td>1</td>
                    <td>$5000</td>
                    <td>pendiente</td>
                </tr> 
            </table>
        </article>
    </section>
    </div>
  );
};
