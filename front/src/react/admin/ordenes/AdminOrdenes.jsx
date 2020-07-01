import React from "react";
import { Link } from "react-router-dom";
import ad from "../../../assets/scss/admin.scss";

export default ({ history }) => {
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
              <th>UsuarioId</th>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>estado</th>
            </tr>
            {history.length
              ? history.map(Element => {
                  return (
                    <tr key={Element.id}>
                      <td>{Element.id}</td>
                      <td>{Element.user.id}</td>
                      <td>{Element.products.map(Element => <img src={Element.imageUno} alt="" /> )}</td>
                      <td>{Element.products.map(Element => Element.name ).join(', ')}</td>
                      <td>{Element.products.map(Element => Element.producto_carrito.cantidad).reduce((x,y)=> x + y,0) }</td>
                      <td>$5000</td>
                      <td>{Element.estado}</td>
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
