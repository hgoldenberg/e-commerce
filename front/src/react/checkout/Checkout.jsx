import React from "react";
import { Link, Redirect } from "react-router-dom";
import styled from 'styled-components';

const DivContainer = styled.div`
  padding: 0px 100px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
`;

const DivCheckout = styled.div`
  margin: 0 auto;
  display: flex;
  max-width: 1220px;
  flex-direction: row;
`;

const DivForm = styled.div`
  padding: 50px 0px;
  width: 70%;
`;
const H2 = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 25px;
`;

const Form = styled.form`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 5px 2px rgba(189, 189, 189, 1);
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 90%;
`;

const Label = styled.label`
  font-size: 18px;
  color: #777;
`;

const Input = styled.input`
  margin-bottom: 20px;
  height: 25px;
  font-size: 18px;
  color: #474747;
  padding: 15px 5px;
`;

const InputSubmit = styled.input`
  background-color: #1d232d;
  border: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 12px 10px;
  width: 30%;
  margin: 0 auto;
  margin-top: 20px;
  cursor: pointer;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
`;

const Aside = styled.aside`
  width: 30%;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 5px 2px rgba(189, 189, 189, 1);
  margin-top: 50px;
  height: 100%;
`;

const DivAsideContent = styled.div`
  padding: 30px;
`;

const H3 = styled.h3`
  font-size: 16px;
  font-weight: 700;
  padding-bottom: 8px;
`;

const Div = styled.div`
  color: #333;
  display: flex;
  flex-direction: row;
  padding: 20px 0px;
  border-top: 2px solid #ccc;
`;

const DivName = styled.div`
  width: 50%;
  text-align: left;
`;

const DivPrice = styled.div`
  width: 50%;
  text-align: right;
`;

const DivColumn = styled.div`
  color: #333;
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  border-top: 2px solid #ccc;
`;

const DivProducto = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 5px;
`;

const BuyCart = styled.div`
  text-align: end;
  margin: 50px 0px;
`;

const ImgError = styled.img`
  width: 100%;
`;

const DivImg =  styled.div`
  margin: 0 auto;
  padding: 50px 0px;
  width: 70%;
`;

export default ({ handleSubmit, handleChange, cart, user, acumulador, estado }) => {
  let total = 0;
  return (
    <DivContainer>
      {user.id ?
      <DivCheckout>
        <DivForm>
          <H2>Agregar domicilio</H2>
          <Form onSubmit={handleSubmit}>
            <Label>Codigo Postal:</Label>
            <Input type="text" name="codigoPostal" onChange={handleChange} />
            <Label>Ciudad de entrega:</Label>
            <Input type="text" name="ciudadEntraga" onChange={handleChange} />
            <Label>Dirección de entrega:</Label>
            <Input
              type="text"
              name="direccionEntrega"
              onChange={handleChange}
            />
            {
              estado == true ? 
              <InputSubmit type="submit" value="Finalizar Compra" />
              : null
            }
            
          </Form>
          <BuyCart>
            <Link to='/carrito'>Volver hacia atras</Link>
          </BuyCart>
        </DivForm>
        <Aside>
          <DivAsideContent>
            <H3>Resumen de compra</H3>
            <DivColumn>
              {cart.id
                ? cart.products.map(element => {
                    total += element.producto_carrito.cantidad * element.price
                    return (
                      <DivProducto key={element.id}>
                        <DivName>{element.name} ({element.producto_carrito.cantidad})</DivName>
                        <DivPrice>$ {element.price}</DivPrice>
                      </DivProducto>
                    );
                  })
                : null}
            </DivColumn>

            <Div>
              <DivName>Total</DivName>
                <DivPrice>$ {cart.id ? total : 0 }</DivPrice>
                <button onClick={(e) => acumulador(e,total)}>Confirmar total</button>
            </Div>
          </DivAsideContent>
        </Aside>
      </DivCheckout>
      :
      <Redirect to="/login"/>
      }
    </DivContainer>
  );
};
