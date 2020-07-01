import React from "react";
import { Link } from "react-router-dom";
import ad from "../../../assets/scss/admin.scss";
import { element } from "prop-types";

export default ({ categories }) => {
  return (
    <div className={ad.main}>
      <section className={ad.section}>
        <article className={ad.articleAdmin}>
          <div className={ad.titleAdmin}>
            <h2>Lista de categorías</h2>
            <button className={ad.buttonCreate}>Crear categoría</button>
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
                          <button className={ad.buttonEdit}>Editar</button>
                          <button className={ad.buttonDelete}>Eliminar</button>
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
