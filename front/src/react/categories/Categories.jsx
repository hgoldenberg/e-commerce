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
const Aside = styled.aside`
  height: 300px;
  width: 300px;
  margin-top: 50px;
  margin-left: 20px;
  float: left;
`;
const AsideSearch = styled.h2`
  font-size: 25px;
  padding: 30px;
  text-align: center;
`;
const CategoriaAside = styled.div`
  padding: 0px 30px;
`;
const CategoriaAsideH = styled.h3`
  color: #212832;
  font-size: 20px;
  margin-bottom: 10px;
`;
const Ul = styled.ul`
  margin: 0px;
  padding: 0px;
`;
const Li = styled.li`
  list-style: none;
  margin: 5px 0px;
`;
const A = styled.a`
  color: #777777;
  text-decoration: none;
`;

export default ({ oneCat }) => {
  console.log(oneCat);

  return (
    <div>
      <Section>
          <h1>{oneCat.length? 
        oneCat.map((e)=>e.tipo).join("")
        :null}</h1>
        <Article>
        
       
          {oneCat.length
            ? oneCat.map((cat) => {
                return cat.products.map((e) => {
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
                                .map((x) => x[0].toUpperCase() + x.slice(1))
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
        </Article>
      </Section>
    </div>
  );
};

//{
  /* <Section>
        <Article>
          {product.length>1
            ? product.map((product) => {
                return (
                  <CardGame key={product.id}>
                    <CardLink>
                      <Link to={`/productos/${product.id}`}>
                        <CardGameImg src={product.imageUno} />
                      </Link>
                      <div className="cardContent">
                        <CardContentP>
                          <CardLink>
                            {product.name
                              .split(" ")
                              .map((x) => x[0].toUpperCase() + x.slice(1))
                              .join(" ")}
                          </CardLink>
                        </CardContentP>
                        <PriceGame>
                          $ {product.price}
                          <span>Ars</span>
                        </PriceGame>
                      </div>
                    </CardLink>
                  </CardGame>
                );
              })
            : null}
        </Article>
      </Section> */
//}

// <div>
//         <h3>HOLA</h3>
//        <ul>
//       {oneCat.length ? (oneCat.map(cat=>{
//           console.log(cat)

//         return cat.products.map(e=>{
//               console.log(e.name)
//             return (
//             <li>{e.name}</li>
//             )
//             })

//       })): (<li>Bienvenido!</li>) }
//     </ul>
//     </div>
