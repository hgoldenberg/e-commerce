import React from "react";
import styled from "styled-components";

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
  padding-top:40px;
  font-size: 22px;
  font-weight: 400;
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

const TotalCart = styled.p`
  text-align: end;
  width: 100%;
  font-size: 25px;
  margin-top: 70px;
`;

const Price = styled.span`
  font-weight: 700;
`;


export default ({ historial }) => {
  console.log(historial);
  let total = 0;
  return (
    <Section>
      <ArticleCart>
        {historial.length
          ? historial.map(product => {
              return (
                <div>
                  <TitleCart>
                    <H3>Compra Nº{product.id}</H3>
                  </TitleCart>
                  {product.products.map(Element => {
                    total += Element.price;
                    return (
                      <ContentCart key={Element.id}>
                        <Img src={Element.imageUno} alt="" />
                        <A>
                          {Element.name
                            .split(" ")
                            .map(x => x[0].toUpperCase() + x.slice(1))
                            .join(" ")}
                        </A>
                        <A>Precio:{Element.price}</A>
                        <A>Cantidad:{Element.producto_carrito.cantidad}</A>
                      </ContentCart>
                    );
                  })}
                  <ContentCart>
                    <TotalCart>
                      Total Compra: <Price>$ {total}</Price>
                    </TotalCart>
                  </ContentCart>
                </div>
              );
            })
          : null}
      </ArticleCart>
    </Section>
  );
};

//  <Section>
//       <ArticleCart>
//         <TitleCart>
//           <H3>Carrito</H3>
//         </TitleCart>
//         {cart.id
//           ? cart.products.map(producto => {
//               return (
//                 <ContentCart key={producto.id}>
//                   <Img src={producto.imageUno} alt="" />
//                   <A>
//                     {producto.name
//                       .split(" ")
//                       .map(x => x[0].toUpperCase() + x.slice(1))
//                       .join(" ")}
//                   </A>
//                 </ContentCart>
//               );
//             })
//           : null}

//       </ArticleCart>
//     </Section>

//  <div>
//             {historial.length ? historial.map(product => {
//                return (
//                    <div>
//                        <h1>Compra numero {product.id}</h1>
//                        {product.products.map(Element =>{
//                            total += Element.price
//                            return (
//                                <div>
//                                    <h2>Productos</h2>
//                                    <ul>
//                                        <li>Nombre del producto:{Element.name}</li>
//                                        <li>Precio del producto:{Element.price}</li>
//                                        <li>Cantidad del producto:{Element.producto_carrito.cantidad}</li>
//                                    </ul>
//                                </div>
//                            )
//                        })}
//                        <h3>TOTAL:{total}</h3>
//                    </div>
//                )
//             }) : <div>NO TENES COMPRAS REALIZADAS</div>}
//         </div>
