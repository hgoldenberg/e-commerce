import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";

const Slider = styled.div`
  margintop: 10px;
`;
const SliderImg = styled.img`
  width: 100%;
  height: 890px;
`;
const Section = styled.section`
  padding: 5px 80px;
`;
const TitleSection = styled.h2`
  font-size: 45px;
  padding: 50px 0px;
  text-align: center;
  margin-top: 80px;
`;
const Article = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:center;
`;
const CardGame = styled.div`
  width: 200px;
  padding-bottom: 10px;
  box-shadow: 0px 4px 5px 2px rgba(189, 189, 189, 1);
  margin-bottom: 40px;
  margin-right: 20px;
`;

const CardGameImg = styled.img`
  height: 280px;
  width: 200px;
`;
const CardContentP = styled.p`
  padding: 10px;
  text-align: center;
`;
const CardLink = styled.a`
  color: #000000;
  text-decoration: none;
`;
const PriceGame = styled.span`
  font-weight: 700;
  display: block;
  text-align: center;
`;

export default ({ juegos }) => {
  const a = juegos.slice(0, 7);
  // const b;
  return (
    <div>
      <Slider>
        <Carousel>
          <Carousel.Item>
            <SliderImg
              className="d-block w-100"
              src="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_1920x1080_Hero-Carousel_V06-1920x1080-1503e4b1320d5652dd4f57466c8bcb79424b3fc0.jpg?h=1080&resize=1&w=1920"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <SliderImg
              className="d-block w-100"
              src="https://news.xbox.com/es-latam/wp-content/uploads/sites/4/2020/04/RE3_wallpaper_1920x1080_A.jpg?fit=1200%2C675"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <SliderImg
              className="d-block w-100"
              src="https://i0.wp.com/culturageek.com.ar/wp-content/uploads/2018/04/Culturageek.com_.ar-Review-God-of-War-1.jpg?fit=1200%2C630&ssl="
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <SliderImg
              className="d-block w-100"
              src="https://www.gameprotv.com/archivos/202007/nba-2k21-nextgen-principal.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <SliderImg
              className="d-block w-100"
              src="https://cdn.discordapp.com/attachments/710507432627142749/728351487243321484/the-last-of-us-2-release-date.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Slider>

      <Section>
        <TitleSection>NUEVOS VIDEOJUEGOS</TitleSection>
        <Article>
          {juegos.length
            ? a.map(juego => {
                return (
                  <CardGame key={juego.id}>
                    <CardLink>
                      <Link to={`/productos/${juego.id}`}>
                        <CardGameImg src={juego.imageUno} />
                      </Link>
                      <div className="cardContent">
                        <CardContentP>
                          <CardLink>
                            {juego.name
                              .split(" ")
                              .map(x => x[0].toUpperCase() + x.slice(1))
                              .join(" ")}
                          </CardLink>
                        </CardContentP>
                        <PriceGame>
                          {juego.price} <span>Ars</span>
                        </PriceGame>
                      </div>
                    </CardLink>
                  </CardGame>
                );
              })
            : null}
        </Article>
        <TitleSection>TOP VIDEOJUEGOS</TitleSection>
        <Article>
          {juegos.length
            ? a.map(juego => {
                return (
                  <CardGame key={juego.id}>
                    <CardLink>
                      <Link to={`/productos/${juego.id}`}>
                        <CardGameImg src={juego.imageUno} />
                      </Link>
                      <div className="cardContent">
                        <CardContentP>
                          <CardLink>
                            {juego.name
                              .split(" ")
                              .map(x => x[0].toUpperCase() + x.slice(1))
                              .join(" ")}
                          </CardLink>
                        </CardContentP>
                        <PriceGame>
                          {juego.price} <span>Ars</span>
                        </PriceGame>
                      </div>
                    </CardLink>
                  </CardGame>
                );
              })
            : null}
        </Article>
      </Section>
  
    </div>
  );
};
