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


export default ({ product, agregarProducto, comentarios }) => {
  console.log(comentarios)
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
                { comentarios.map(comment => 
                  <Comentarios>
                    <P>{comment.comentarios}</P>
                  </Comentarios>
                )}
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