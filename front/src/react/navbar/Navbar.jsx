import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default ({ handlerChange, handlerSubmit, valor }) => {
  console.log("este es el componente tonto ");
  const Nav = styled.nav`
    background: #1d232d;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 0px 60px;
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
    margin: 0px 50px;
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
      width: 550px;
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
  `;
  const LinksNav = styled.div`
      color: #ffffff;
      text-decoration: none;
  `;

  const CarritoNav = styled.div`
      display: flex;
      align-items: center;
      margin: 0px 50px;
      color: #ffffff;
      text-decoration: none;
  `;

  const CarritoName = styled.div`
    margin: 0px 5px;
  `;

  return(
      <Nav>
    <Link to="/">
        <Logo>
            <LogoImg src="./p5games.jpg"/>
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
      <Link to="/productos">
          <LinksNav>
             Categorías  
          </LinksNav>
              
      </Link>
      <Link to="/carrito">   
                <CarritoNav>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="32" height="32"
                    viewBox="0 0 226 226"
                    style={{'fill':'#000000'}}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{'mix-blend-mode':' normal'}}><path d="M0,226v-226h226v226z" fill="none"></path><g fill="#cccccc"><path d="M35.3125,49.4375c-3.88989,0 -7.0625,3.17261 -7.0625,7.0625c0,3.88989 3.17261,7.0625 7.0625,7.0625h15.66992l18.53906,74.15625c1.57251,6.29004 7.20044,10.59375 13.68359,10.59375h80.99805c6.3728,0 11.78003,-4.22095 13.46289,-10.37305l18.31836,-67.31445h-118.29687l3.53125,14.125h96.44727l-13.46289,49.4375h-80.99805l-18.53906,-74.15625c-1.57251,-6.29004 -7.20044,-10.59375 -13.68359,-10.59375zM155.375,148.3125c-11.6145,0 -21.1875,9.573 -21.1875,21.1875c0,11.6145 9.573,21.1875 21.1875,21.1875c11.6145,0 21.1875,-9.573 21.1875,-21.1875c0,-11.6145 -9.573,-21.1875 -21.1875,-21.1875zM91.8125,148.3125c-11.6145,0 -21.1875,9.573 -21.1875,21.1875c0,11.6145 9.573,21.1875 21.1875,21.1875c11.6145,0 21.1875,-9.573 21.1875,-21.1875c0,-11.6145 -9.573,-21.1875 -21.1875,-21.1875zM91.8125,162.4375c3.97266,0 7.0625,3.08984 7.0625,7.0625c0,3.97266 -3.08984,7.0625 -7.0625,7.0625c-3.97266,0 -7.0625,-3.08984 -7.0625,-7.0625c0,-3.97266 3.08984,-7.0625 7.0625,-7.0625zM155.375,162.4375c3.97266,0 7.0625,3.08984 7.0625,7.0625c0,3.97266 -3.08984,7.0625 -7.0625,7.0625c-3.97266,0 -7.0625,-3.08984 -7.0625,-7.0625c0,-3.97266 3.08984,-7.0625 7.0625,-7.0625z"></path></g></g></svg>
                    <CarritoName>Carrito</CarritoName>
              </CarritoNav>
      </Link>
      <Link to="/register">
        <LinksNav>
            Acceder     
        </LinksNav>
      </Link>
  </Nav>

  )
  

};
