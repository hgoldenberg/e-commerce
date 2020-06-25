import React from "react";
import styled from "styled-components";
import p from "../../assets/scss/product.scss";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
  ImageWithZoom
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Section = styled.section`
  margin: 20px 100px;
`;
const ArticleProduct = styled.article`
  margin: 0 auto;
  padding: 50px 0px;
  width: 1000px;
  display: flex;
  flex-direction: row;
  display: block;
  height: 600px;
`;

const ImageProduct = styled.div`
  display: flex;
  flex-direction: column;
`;
const ImageProductImg = styled.img`
  width: 110px;
  height: 300px;
`;
const ContentProduct = styled.div`
  margin: 0px 50px;
  width: 400px;
  float: left;
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
const Div = styled.div`
  width: 500px;
  float: left;
`;

const Button = styled.div`
  position: absolute;
`;

export default ({ product, agregarProducto }) => {
  return (
    <Section>
      <ArticleProduct>
        <Div>
          <CarouselProvider
            visibleSlides={1}
            totalSlides={2}
            step={1}
            naturalSlideWidth={500}
            naturalSlideHeight={500}
            infinite
          >
            <Slider>
              <Slide index={0}>
                <ImageWithZoom className={p.Img} src={product.imageUno} />
              </Slide>

              <Slide index={1}>
                <ImageWithZoom src={product.imageDos} />
              </Slide>
            </Slider>
            <Button>
              <ButtonBack className={p.back}></ButtonBack>
              <ButtonNext className={p.next}></ButtonNext>
            </Button>
          </CarouselProvider>
        </Div>

        <ContentProduct>
          {product.id ? (
            <TitleProduct>
              {product.name
                .split(" ")
                .map(x => x[0].toUpperCase() + x.slice(1))
                .join(" ")}
            </TitleProduct>
          ) : null}
          <p>"{product.description}"</p>
          <h3> $ {product.price}</h3>
          <CartProduct onClick={() => agregarProducto()}>
            Agregar al carrito
          </CartProduct>
        </ContentProduct>
      </ArticleProduct>
    </Section>
  );
};

/*

*/
