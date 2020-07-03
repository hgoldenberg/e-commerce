import React from "react";
import { Link } from "react-router-dom";
import ad from "../../../assets/scss/admin.scss";
import styled from 'styled-components';

const Img = styled.img`
  width: 2em !important;
  height: 2em !important;
  border-radius: 5em;
`;

export default ({ isLogged, users, handleUser, handleAdmin}) => {
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
                      <td>{ element.avatar ? 
                        <Img src={element.avatar}/>
                      :
                    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
                      <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                      <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
                    </svg>
                    }</td>
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

