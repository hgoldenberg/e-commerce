import React from "react";
import { Link } from "react-router-dom";
import ad from "../../../assets/scss/admin.scss";
import { element } from "prop-types";

export default ({ categories , handleClick}) => {
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
              {categories.length
                ? categories.map(element => {
                    return (
                      <tr key={element.id}>
                        <td>{element.tipo}</td>
                        <td>
                        <Link to={`/admin/categorias/editar/${element.id}`}><button className={ad.buttonEdit}>Editar</button></Link>
                          <button className={ad.buttonDelete} onClick={()=> handleClick(element.id)}>Eliminar</button>
                        </td>
                      </tr>
                    );
                  })
                : null}
          </table>
        </article>
      </section>
    </div>
  );
};
