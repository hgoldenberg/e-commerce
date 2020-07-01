import React from "react";
import styled from "styled-components";
import p from "../../assets/scss/product.scss";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
  ImageWithZoom,
  Image
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Section = styled.section`
  margin: 0px;
  padding: 50px 0px;
`;
const ArticleProduct = styled.article`
  margin: 0 auto;
  width: 1200px;
  display: flex;
  flex-direction: row;
  display: block;
  overflow: hidden;
  border: 1px solid #eaeaea;
  box-shadow: 0px 4px 5px 2px rgba(189, 189, 189, 1);
  background-color: #fcfcfc;
`;

const ContentProduct = styled.div`
  width: 420px;
  float: left;
  padding: 50px;
  position: fixed;
  display: unset;
  border-bottom: 1px solid #ccc;
`;
const TitleProduct = styled.h2`
  padding-top: 20px;
  font-size: 28px;
  font-weight: 700;
  margin: 0px;
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
  margin-top: 20px;
`;
const Div = styled.div`
  width: 550px;
  margin: 0 auto;
  padding: 60px;
`;

const DivContainer = styled.div`
  width: 65%;
  border-right: 1px solid #eaeaea;
  float: left;
`;

const Button = styled.div`
  position: absolute;
`;

const H2 = styled.h2`
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
`;

const Price = styled.h3`
  font-size: 42px;
  margin: 20px 0px;
  font-weight: 100;
`;

const Comentarios = styled.div`
  display: flex;
  flex-direction: row;
`;

const P = styled.p`
  color: #777;
`;

const Svg = styled.svg`
  margin-top: 5px;
  margin-right: 10px;
`;

const Stars = styled.p`
  font-size: 22px;
  margin: 5px 0px;
  color: #ccc;
`;


const DivContentData = styled.div`
  border-top: 1px solid #ccc;
  padding: 50px;
`;

const DivComentarios = styled.div`
  
`;
const DivDescripcion = styled.div`
  margin-bottom: 50px;
`;


export default ({ product, agregarProducto }) => {
  return (
    <Section>
      <ArticleProduct>
          <DivContainer>
            <Div>
            <CarouselProvider
                visibleSlides={1}
                totalSlides={2}
                step={1}
                naturalSlideWidth={500}
                naturalSlideHeight={500}
                infinite
              >
              <Slider className={p.sliderProduct}>

                <Slide index={0} className={p.ImgProduct}>
                  <ImageWithZoom className={p.ImgZoom} src={product.imageUno} />
                </Slide>

                <Slide index={1} className={p.ImgDosProduct}>
                  <ImageWithZoom className={p.ImgDosZoom} src={product.imageDos} />
                </Slide>

              </Slider>
              <Button>
                <ButtonBack className={p.back}></ButtonBack>
                <ButtonNext className={p.next}></ButtonNext>
              </Button>
            </CarouselProvider>
            </Div>
            <DivContentData>
              <DivDescripcion>
                <H2>Descripción</H2>
                <P>"{product.description}"</P>
              </DivDescripcion>
              <DivComentarios>
              <H2>Comentarios</H2>
                <Comentarios>
                <Svg width="2em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-left-text" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v11.586l2-2A2 2 0 0 1 4.414 11H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                  <path fill-rule="evenodd" d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                </Svg>
                  <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sed suscipit quaerat maxime? Ex, cupiditate tempora iure quasi, ab molestias neque nobis aliquid nam quo eius. Laboriosam facere facilis quis?</P>
                </Comentarios>
              </DivComentarios>
              
            </DivContentData>
          </DivContainer>
        <ContentProduct>
          {product.id ? (
              <TitleProduct>
                {product.name
                  .split(" ")
                  .map(x => x[0].toUpperCase() + x.slice(1))
                  .join(" ")}
              </TitleProduct>
            ) : null}

            <Stars>★★★★★</Stars>
            <Price> $ {product.price}</Price>
            <CartProduct onClick={() => agregarProducto()}>
              Agregar al carrito
            </CartProduct>
        </ContentProduct>
      </ArticleProduct>
    </Section>
  );
};