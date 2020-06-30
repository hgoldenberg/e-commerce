import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import n from "../../assets/scss/navbar.scss";
import a from "../../assets/scss/admin.scss";

const Nav = styled.nav`
  background: #1d232d;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0px 60px;
`;
const ContainerNav = styled.nav`
  margin: 0 auto;
  width: 1500px;
  display: flex;
  flex-direction: row;
`;
const Logo = styled.div`
  margin: 0px 20px;
`;
const LogoImg = styled.img`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  opacity: 0.8;
  margin-top: 4px;
`;
const FormSearch = styled.form`
  margin: 12px 50px;
  width: 70%;
`;
const DivSearch = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const InputSearch = styled.input`
  background-color: #fff;
  color: #000000;
  padding: 4px 8px;
  border: none;
  height: 30px;
  font-size: 14px;
  width: 93%;
  border-radius: 5px 0px 0px 5px;
`;
const ButtonSearch = styled.button`
  background-color: #fff;
  padding: 4px 8px;
  border: none;
  height: 30px;
  border-radius: 0px 5px 5px 0px;
  cursor: pointer;
  color: #777777;
  width: 7%;
`;

const CarritoNav = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const CarritoName = styled.div`
  margin: 0px 5px;
`;

export default ({
  handlerChange,
  handleClick,
  handlerSubmit,
  valor,
  isLogged,
  doLogOut,
  user,
}) => {
  console.log(isLogged);
  window.onscroll = function () {
    scrollFunction();
  };
  var myNav = document.getElementById("myNav");

  function scrollFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      myNav.style.position = "fixed";
      myNav.style.width = "100%";
      myNav.style.zIndex = "1000";
    } else {
      myNav.style.position = "unset";
    }
  }

  return (
    <>
      <Nav id="myNav">
        <ContainerNav>
          <Link to="/">
            <Logo>
              <LogoImg src="./p5games.jpg" />
            </Logo>
          </Link>
          <FormSearch onSubmit={handlerSubmit}>
            <DivSearch>
              <InputSearch
                type="text"
                placeholder="Buscar productos"
                onChange={handlerChange}
                value={valor}
              />
              <ButtonSearch>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  class="iconSearch"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  role="presentation"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                </svg>
              </ButtonSearch>
            </DivSearch>
          </FormSearch>
          <Link to="/productos" className={n.Links}>
            Categorías
          </Link>
          <Link to="/carrito" className={n.Links}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="32"
              height="32"
              viewBox="0 0 226 226"
              style={{ fill: "#000000" }}
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style={{ "mix-blend-mode": " normal" }}
              >
                <path d="M0,226v-226h226v226z" fill="none"></path>
                <g fill="#cccccc">
                  <path d="M35.3125,49.4375c-3.88989,0 -7.0625,3.17261 -7.0625,7.0625c0,3.88989 3.17261,7.0625 7.0625,7.0625h15.66992l18.53906,74.15625c1.57251,6.29004 7.20044,10.59375 13.68359,10.59375h80.99805c6.3728,0 11.78003,-4.22095 13.46289,-10.37305l18.31836,-67.31445h-118.29687l3.53125,14.125h96.44727l-13.46289,49.4375h-80.99805l-18.53906,-74.15625c-1.57251,-6.29004 -7.20044,-10.59375 -13.68359,-10.59375zM155.375,148.3125c-11.6145,0 -21.1875,9.573 -21.1875,21.1875c0,11.6145 9.573,21.1875 21.1875,21.1875c11.6145,0 21.1875,-9.573 21.1875,-21.1875c0,-11.6145 -9.573,-21.1875 -21.1875,-21.1875zM91.8125,148.3125c-11.6145,0 -21.1875,9.573 -21.1875,21.1875c0,11.6145 9.573,21.1875 21.1875,21.1875c11.6145,0 21.1875,-9.573 21.1875,-21.1875c0,-11.6145 -9.573,-21.1875 -21.1875,-21.1875zM91.8125,162.4375c3.97266,0 7.0625,3.08984 7.0625,7.0625c0,3.97266 -3.08984,7.0625 -7.0625,7.0625c-3.97266,0 -7.0625,-3.08984 -7.0625,-7.0625c0,-3.97266 3.08984,-7.0625 7.0625,-7.0625zM155.375,162.4375c3.97266,0 7.0625,3.08984 7.0625,7.0625c0,3.97266 -3.08984,7.0625 -7.0625,7.0625c-3.97266,0 -7.0625,-3.08984 -7.0625,-7.0625c0,-3.97266 3.08984,-7.0625 7.0625,-7.0625z"></path>
                </g>
              </g>
            </svg>
            <CarritoName>Carrito</CarritoName>
          </Link>
          {!isLogged.id ? (
            <Link to="/register" className={n.Links}>
              <div>acceder</div>
            </Link>
          ) : (
            <div onClick={handleClick} className={n.LinkUser}>
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
                class="bi bi-person-circle"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                <path
                  fill-rule="evenodd"
                  d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
                <path
                  fill-rule="evenodd"
                  d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                />
              </svg>
              <span className={n.userConfig}>{isLogged.name}</span>
              <svg
                width="12"
                height="12"
                viewBox="4 4 14 14"
                fill="currentColor"
                role="presentation"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M8.71 11.71l2.59 2.59c.39.39 1.02.39 1.41 0l2.59-2.59c.63-.63.18-1.71-.71-1.71H9.41c-.89 0-1.33 1.08-.7 1.71z"></path>
              </svg>
              {user ? (
                <div>
                  <ul className={n.listConfig}>
                    <li>
                      <Link to="/">Mis datos</Link>
                    </li>
                    {isLogged.roll == "admin" || isLogged.roll == "superAdmin" ? 
                      <li><Link to='/admin'>Administrar</Link></li>
                    : null}   
                    <li>
                      <Link to="/" onClick={doLogOut}>
                        Salir
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : null}
            </div>
          )}
        </ContainerNav>
      </Nav>
    </>
  );
};
