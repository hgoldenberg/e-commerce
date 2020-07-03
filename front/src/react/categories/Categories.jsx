import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardGame = styled.div`
  width: 200px;
  padding-bottom: 10px;
  box-shadow: 0px 4px 5px 2px rgba(189, 189, 189, 1);
  margin-top: 30px;
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
const Section = styled.section`
  padding: 20px 100px;
`;
const Article = styled.article`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;


export default ({ oneCat }) => {
  return (
    <div>
      <Section>
        <h1>{oneCat.length ? oneCat.map(e => e.tipo).join("") : null}</h1>
        <Article>
          {oneCat.length
            ? oneCat.map(cat => {
                return cat.products.map(e => {
                  return (
                    <CardGame key={e.id}>
                      <CardLink>
                        <Link to={`/productos/${e.id}`}>
                          <CardGameImg src={e.imageUno} />
                        </Link>
                        <div className="cardContent">
                          <CardContentP>
                            <CardLink>
                              {e.name
                                .split(" ")
                                .map(x => x[0].toUpperCase() + x.slice(1))
                                .join(" ")}
                            </CardLink>
                          </CardContentP>
                          <PriceGame>
                            $ {e.price}
                            <span>Ars</span>
                          </PriceGame>
                        </div>
                      </CardLink>
                    </CardGame>
                  );
                });
              })
            : null}
            <Link to="/productos">Volver a productos</Link>
        </Article>
      </Section>
    </div>
  );
};

