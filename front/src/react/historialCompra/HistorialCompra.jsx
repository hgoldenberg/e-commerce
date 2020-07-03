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
  padding-top: 40px;
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
  return (
    <Section>
      <ArticleCart>
        {historial.length
          ? historial.map(product => {
              return (
                <div key={product.id}>
                  <TitleCart>
                    <H3>Compra Nº{product.id}</H3>
                  </TitleCart>
                  {product.products.map(Element => {
                    
                    return (
                      <React.Fragment>
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
                        <ContentCart>
                          <TotalCart>
                            Total Compra: <Price>$ {product.valor_compra}</Price>
                          </TotalCart>
                      </ContentCart>
                     </React.Fragment>
                    );
                  })}
    
                </div>
              );
            })
          : null}
      </ArticleCart>
    </Section>
  );
};
