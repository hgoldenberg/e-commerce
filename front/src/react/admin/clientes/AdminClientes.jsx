import React from "react";
import { Link } from "react-router-dom";
import ad from "../../../assets/scss/admin.scss";

export default ({ isLogged, users, handleUser, handleAdmin, updateAdmin, updateUser }) => {
  console.log(users);
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
              <th>Cambiar</th>
            </tr>

            {users.length
              ? users.map((element) => {
                  return (
                    <tr>
                      <td>{element.avatar}</td>
                    <td>{element.roll}</td>
                     <td>{element.name}</td>
                        <td>{element.lastname}</td>
                        <td>{element.direccion}</td>
                        <td>{element.email}</td>
                        
                      {isLogged.roll == "superAdmin" ? (
                        <td>
                           
                          <button className={ad.buttonEdit} onClick={()=>handleUser(element.id)}>User</button>
                          
                          
                          <button className={ad.buttonDelete} onClick={()=>handleAdmin(element.id)}>Admin</button>
                          
                        </td>
                      ) : (
                        <td>
                            
                          <button className={ad.buttonDelete} onClick={()=>handleAdmin(element.id)}>Admin</button>
                          
                        </td>
                      )}
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

//     <tr>

//        <td></td>
//        <td>user</td>
//        <td>Ariel</td>
//        <td>Blas</td>
//        <td>Calle Falsa</td>
//        <td>ariel@ariel.com</td>
//        {isLogged.roll == "superAdmin" ?
//        <td>
//            <button className={ad.buttonEdit}>User</button>
//            <button className={ad.buttonDelete}>Admin</button>
//        </td>
//        :
//        <td>
//            <button className={ad.buttonDelete}>Admin</button>
//        </td>
//        }
//    </tr>


//<button className={ad.buttonDelete} onClick={handleClick, ()=> updateAdmin(element.id)}>Admin</button>


// onClick={()=> handleClick(element.id)}
// <Link to={`/admin/toadmin/${element.id}`} > </Link>