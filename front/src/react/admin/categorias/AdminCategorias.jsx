import React from "react";
import { Link } from "react-router-dom";
import ad from "../../../assets/scss/admin.scss";

export default () => {

  return (
      <div className={ad.main}>
        <section className={ad.section}>
        <article className={ad.articleAdmin}>
            <div className={ad.titleAdmin}>
                <h2>Lista de categorías</h2>
                <Link to="/admin/categorias/crear"><button className={ad.buttonCreate}>Crear categoría</button></Link>
            </div>
            <table className={ad.table}>
                <tr>              
                    <th>Tipo</th> 
                    <th>Acción</th>      
                </tr>
                <tr>
                    <td>Terror</td>
                    <td>
                        <Link to="/admin/categorias/editar"><button className={ad.buttonEdit}>Editar</button></Link>
                        <button className={ad.buttonDelete}>Eliminar</button>
                    </td>
                </tr> 
            </table>
        </article>
    </section>
    </div>
  );
};
