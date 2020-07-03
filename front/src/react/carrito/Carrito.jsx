import React from "react";
import styled from "styled-components";
import n from "../../assets/scss/navbar.scss";
import { Link } from "react-router-dom";

const Section = styled.section`
  padding: 20px 100px;
`;
const ArticleCart = styled.article`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 5px 2px rgba(189, 189, 189, 1);
  display: flex;
  flex-direction: column;
  padding: 30px;
`;
const TitleCart = styled.div`
  border-bottom: 1px solid #aaaaaa;
  height: 80px;
`;
const H3 = styled.h3`
  padding: 38px 170px 14px 100px;
  font-size: 22px;
  font-weight: 400;
  width: 80px;
  border-bottom: 3px solid #000000;
`;
const ContentCart = styled.div`
  display: flex;
  flex-direction: row;
  height: 170px;
  border-bottom: 1px solid #aaaaaa;
  align-items: center;
`;
const Img = styled.img`
  width: 80px;
  height: 110px;
`;

const ProductName = styled.div`
  padding: 0px 50px;
  text-decoration: none;
  color: #000000;
  font-size: 22px;
`;

const Form = styled.form`
  margin: 0px;
  width: 30%;
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  font-size: 18px;
  padding: 10px;
  text-align: center;
  border: none;
  outline: none;
  background: transparent;
`;

const PriceCart = styled.span`
  display: block;
  font-size: 28px;
  text-align: end;
  width: 30%;
`;

const DivProducto = styled.div`
  width: 40%;
  display: flex;
  align-items: center;

`;

const TotalCart = styled.p`
  text-align: end;
  font-size: 25px;
  width: 100%;
  margin: 0px;
`;

const Price = styled.span`
  font-weight: 700;
`;

const BuyCart = styled.div`
  text-align: end;
  margin: 50px 0px;
`;

const ButtonBuy = styled.button`
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: #1d232d;
  font-size: 20px;
  border: 1px solid #1d232d;
  margin: 5px 5px;
`;

const DivCantidad = styled.div`
  position: relative;
  width: 100px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  display: flex;
`;

const Button = styled.button`
  width: 30px;
  border: none;
  color: #1d232d;
  outline: none;
  background-color: transparent;
`;

export default ({user, cart, handleDelete, handleClick , handleInputSumar , handleInputRestar, storageCart, handleDeleteStorage}) => {
  let total = 0;
  return (
    <Section>
      <ArticleCart>
        <TitleCart>
          <H3>Carrito</H3>
        </TitleCart>
        {cart || user.id || storageCart ? (<div>

          
       
        {cart.id && user.id 
          ? cart.products.map(producto => {
              total += producto.producto_carrito.cantidad * producto.price;
              return (
                <ContentCart key={producto.id}>
                  <DivProducto>
                    <Img src={producto.imageUno} alt=""/>
                    <Link to={`/productos/${producto.id}`}>
                      <ProductName>
                      {producto.name
                        .split(" ")
                        .map(x => x[0].toUpperCase() + x.slice(1))
                        .join(" ")}
                      </ProductName>
                    </Link>
                  </DivProducto>
                  <Form>
                    <DivCantidad>
                    {producto.producto_carrito.cantidad === 1 ? null : <Button onClick={(e) => handleInputRestar(e, producto.id)}>-</Button>}
                      <Input type="tel" name={producto.id}
                        value={producto.producto_carrito.cantidad}
                      />
                      <Button onClick={(e) => handleInputSumar(e, producto.id)}>+</Button>
                      
                    </DivCantidad>
                  </Form>
                  <PriceCart>
                    $ {producto.price}{" "}
                    <button
                      className="btn btn-primary"
                      style={{ marginLeft: "20px" }}
                      onClick={() => handleDelete(cart.id, producto.id)}
                    >
                      Eliminar
                    </button>
                  </PriceCart>
                </ContentCart>
              );
            })
          : 
          storageCart.map(producto => {
            
            return (
              <ContentCart key={producto.id}>
                <DivProducto>
                  <Img src={producto.imageUno} alt=""/>
                  <Link to={`/productos/${producto.id}`}>
                    <ProductName>
                    {producto.name
                      .split(" ")
                      .map(x => x[0].toUpperCase() + x.slice(1))
                      .join(" ")}
                    </ProductName>
                  </Link>
                </DivProducto>
          
                <PriceCart>
                  $ {producto.price}{" "}
                  <button
                    className="btn btn-primary"
                    style={{ marginLeft: "20px" }}
                    onClick={() => handleDeleteStorage(producto.id)}
                  >
                    Eliminar
                  </button>
                </PriceCart>
              </ContentCart>
            );
          })
          }
        {cart.id ?
        <React.Fragment>
          <ContentCart>
            <TotalCart>
              Total: <Price>$ {cart.id ? total : 0}</Price>
            </TotalCart>
          </ContentCart>
          <BuyCart>
          <ButtonBuy onClick={handleClick}>Seguir comprando</ButtonBuy>
          {cart.products.length >= 1 ? 
            <Link to="/checkout" className={n.buyCart}>Comprar</Link>
          : null }
          
        </BuyCart>
        </React.Fragment>
        : <BuyCart>
        <ButtonBuy onClick={handleClick}>Seguir comprando</ButtonBuy>
        <Link to="/login" className={n.buyCart}>Comprar</Link>
      </BuyCart>
      }
         </div>) : (null)}
      </ArticleCart>
    </Section>
  );
};
