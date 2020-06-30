import React from "react";
import { Link } from "react-router-dom";
import ad from "../../../assets/scss/admin.scss";

export default () => {

  return (
      <div className={ad.main}>
        <section className={ad.section}>
        <article className={ad.articleAdmin}>
            <div className={ad.titleAdmin}>
                <h2>Lista de clientes</h2>
            </div>
            <table className={ad.table}>
                <tr>              
                    <th>Avatar</th> 
                    <th>Rol</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>dirección</th>
                    <th>Email</th>
                </tr>
                <tr>
                    <td></td>
                    <td>user</td>
                    <td>Ariel</td>
                    <td>Blas</td>
                    <td>Calle Falsa</td>
                    <td>ariel@ariel.com</td>
                </tr> 
            </table>
        </article>
    </section>
    </div>
  );
};
