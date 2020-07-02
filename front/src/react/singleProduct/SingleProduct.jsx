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
import ReactStars from "react-rating-stars-component";

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
  margin-bottom: 10px;
`;

const P = styled.p`
  color: #777;
  font-size: 18px;
`;

const Svg = styled.svg`
  margin-top: 5px;
  margin-right: 10px;
`;

const Stars = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;


const DivContentData = styled.div`
  border-top: 1px solid #ccc;
  padding: 50px;
  
`;

const Opiniones = styled.span`
  font-size: 14px;
  margin: 2.5px 0px 0px 10px;
`;

const DivComentarios = styled.div`
  
`;
const DivDescripcion = styled.div`
  margin-bottom: 50px;
`;

const DivImg = styled.div`
  width: 100px;
  height:100px;
  margin: 0px;
  padding: 10px:
`;

export default ({ product, agregarProducto, comentarios, rating, stars }) => {
  console.log('stars',stars)
  let opiniones;
  if(stars.length == 1){
    opiniones = <Opiniones>{stars.length} opinión</Opiniones>
  }
  else if(stars.length == 0){
    opiniones = null
  }
  else{
    opiniones = <Opiniones>{stars.length} opiniones</Opiniones>
  }
  return (
    <Section>
      <ArticleProduct>
          <DivContainer>
            <div className={p.carouseles}>
            <div className={p.carouselImg}>
          <CarouselProvider
                  visibleSlides={2}
                  totalSlides={2}
                  step={1}
                  naturalSlideWidth={100}
                  naturalSlideHeight={100}
                  infinite
                  orientation={"vertical"}
                  dragEnabled={false}
                  
                >
                  <Slider className={p.sliderImg}>
                    <Slide>
                      <DivImg><Image src={product.imageUno}></Image></DivImg>
                    </Slide>
                    <Slide>
                      <DivImg><Image src={product.imageDos}></Image></DivImg>
                    </Slide>
                  </Slider>
                </CarouselProvider>
                </div>
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
            </div>
            <DivContentData>
              <DivDescripcion>
                <H2>Descripción</H2>
                <P>"{product.description}"</P>
                
              </DivDescripcion>
              { comentarios.length !== 0 ?
               <DivComentarios>
                <H2>Opiniones sobre el producto</H2>
                
                  {comentarios.map(comment => 
                    <Comentarios>
                      <P>{comment.comentarios}</P>
                    </Comentarios>
                  )}
              
                </DivComentarios>
              : null}
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
            
              {rating !== null ?
              <Stars>
                <ReactStars
                  count={5}
                  size={24}
                  color2={"#ffd700"}
                  value={rating}
                  edit={false}
                />
                {opiniones}
              </Stars> 
              : null}
                       
            <Price> $ {product.price}</Price>
            <CartProduct onClick={() => agregarProducto()}>
              Agregar al carrito
            </CartProduct>
        </ContentProduct>
      </ArticleProduct>
    </Section>
  );
};