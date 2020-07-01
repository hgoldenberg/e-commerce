import React from "react";
import styled from "styled-components";
import n from "../../assets/scss/navbar.scss";
import { Link } from "react-router-dom";

const Section = styled.section`
  padding: 20px 100px;
`;
const ArticleCart = styled.article`
  margin: 25px 0px;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 5px 2px rgba(189, 189, 189, 1);
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
`;
const TitleCart = styled.div`
  border-bottom: 1px solid #aaaaaa;
  height: 80px;
  width: 90%;
  margin: 0px 50px;
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
  width: 90%;
  padding: 30px 0px;
  height: 170px;
  border-bottom: 1px solid #aaaaaa;
  margin: 0px 50px;
`;
const Img = styled.img`
  width: 80px;
  height: 110px;
`;

const A = styled.a`
  padding: 30px 50px;
  text-decoration: none;
  color: #000000;
  font-size: 22px;
  width: 500px;
`;

const Form = styled.form`
  margin: 22px;
`;

const Input = styled.input`
  width: 70px;
  font-size: 18px;
  padding: 10px;
`;

const PriceCart = styled.span`
  font-size: 28px;
  margin: 26px 0px 0px 150px;
`;

const TotalCart = styled.p`
  text-align: end;
  width: 100%;
  font-size: 25px;
  margin-top: 70px;
`;

const Price = styled.span`
  font-weight: 700;
`;

const BuyCart = styled.div`
  text-align: end;
  width: 95%;
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

export default ({
  cart,
  handleDelete,
  handleClick,
  handleInputSumar,
  handleInputRestar
}) => {
  let total = 0;
  return (
    <Section>
      <ArticleCart>
        <TitleCart>
          <H3>Carrito</H3>
        </TitleCart>
        {cart.id
          ? cart.products.map(producto => {
              total += producto.producto_carrito.cantidad * producto.price;
              cart.valor_compra = total;
              return (
                <ContentCart key={producto.id}>
                  <Img src={producto.imageUno} alt="" />
                  <A>
                    {producto.name
                      .split(" ")
                      .map(x => x[0].toUpperCase() + x.slice(1))
                      .join(" ")}
                  </A>
                  <Form>
                    <label>
                      <Input
                        type="tel"
                        name={producto.id}
                        value={producto.producto_carrito.cantidad}
                      />
                      <button onClick={e => handleInputSumar(e, producto.id)}>
                        +
                      </button>
                      {producto.producto_carrito.cantidad === 0 ? (
                        <button
                          onClick={e => handleInputRestar(e, producto.id)}
                          disabled
                        >
                          -
                        </button>
                      ) : (
                        <button
                          onClick={e => handleInputRestar(e, producto.id)}
                        >
                          -
                        </button>
                      )}
                    </label>
                  </Form>
                  <PriceCart>
                    $ {producto.price}{" "}
                    <button
                      className="btn btn-primary"
                      style={{ marginLeft: "20px" }}
                      onClick={() => handleDelete(cart.id, producto.id)}
                    >
                      eliminar
                    </button>
                  </PriceCart>
                </ContentCart>
              );
            })
          : null}

        <ContentCart>
          <TotalCart>
            Total: <Price>$ {cart.id ? cart.valor_compra : 0}</Price>
          </TotalCart>
        </ContentCart>
        <BuyCart>
          <ButtonBuy onClick={handleClick}>seguir comprando</ButtonBuy>
          <Link to="/checkout" className={n.buyCart}>
            Comprar
          </Link>
        </BuyCart>
      </ArticleCart>
    </Section>
  );
};
