import React from "react";
import styled from "styled-components";

export default ({ product }) => {
  console.log(product);

  const Section = styled.section`
    padding: 20px 100px;
  `;
  const ArticleProduct = styled.article`
    margin: 40px 50px;
    display: flex;
    flex-direction: row;
  `;
  const ImageProductImg = styled.img`
    width: 350px;
    height: 420px;
  `;
  const ContentProduct = styled.div`
    margin: 0px 50px;
    width: 400px;
  `;
  const TitleProduct = styled.h2`
    padding: 20px 0px;
  `;
  const Form = styled.form`
    margin-top: 50px;
  `;
  const Input = styled.input`
    width: 60px;
    font-size: 18px;
    padding: 10px;
    margin: 0px 10px;
  `;
  const BuyProduct = styled.button`
    background-color: #1d232d;
    padding: 15px 25px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    color: #ffffff;
    font-size: 15px;
    border: 1px solid #1d232d;
    margin-top: 40px;
    margin-right: 40px;
  `;
  const CartProduct = styled.button`
    background-color: #ffffff;
    padding: 15px 25px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    color: #1d232d;
    font-size: 15px;
    border: 1px solid #1d232d;
    margin-top: 40px;
  `;

  return (
    <Section>
      <ArticleProduct>
        <div className="imageProduct">
          <ImageProductImg src={product.imageUno} />
        </div>
        <ContentProduct>
          <TitleProduct>{product.name}</TitleProduct>
          <p>"{product.description}"</p>
          <h3> $ {product.price}</h3>
          <CartProduct>Agregar al carrito</CartProduct>
        </ContentProduct>
      </ArticleProduct>
    </Section>
  );
};
