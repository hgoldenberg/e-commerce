import React from "react";
import { Link } from "react-router-dom";
import ad from "../../../assets/scss/admin.scss";

export default ({ productos }) => {
  console.log(productos);
  return (
    <div className={ad.main}>
      <section className={ad.section}>
        <article className={ad.articleAdmin}>
          <div className={ad.titleAdmin}>
            <h2>Lista de productos</h2>
            <Link to="/admin/productos/crear"><button className={ad.buttonCreate}>Crear producto</button></Link>
          </div>
          <table className={ad.table}>
            <tr>
              <th>id</th>
              <th>Imagen 1</th>
              <th>Imagen 2</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Acción</th>
            </tr>
            {productos.length
              ? productos.map(element => {
                  return (
                    <tr key={element.id}>
                      <td>{element.id}</td>
                      <td>
                        <img src={element.imageUno} alt="" />
                      </td>
                      <td>
                        <img src={element.imageDos} alt="" />
                      </td>
                      <td>{element.name}</td>
                      <td className={ad.sizeDescription}>
                        {element.description}
                      </td>
                      <td>
                      {element.categories.map(categoria => categoria.tipo).join(' ')}
                      </td>
                      <td>${element.price}</td>
                      <td>{element.stock}</td>
                      <td>
                      <Link to="/admin/productos/editar"><button className={ad.buttonEdit}>Editar</button></Link>
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
