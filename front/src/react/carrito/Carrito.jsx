import React from "react";
import styled from "styled-components";

const Section = styled.section`
        padding: 20px 100px;
    `;
    const ArticleCart = styled.article`
        margin: 25px 0px;
        background-color: #fcfcfc;
        box-shadow: 0px 4px 5px 2px rgba(189,189,189,1);
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
        padding: 38px 170px 14px 100px;
        font-size: 22px;
        font-weight: 400;
        width: 80px;
        border-bottom: 3px solid #000000;
    `;
    const ContentCart = styled.div`
        display: flex;
        flex-direction: row;
        width: 90%;
        padding: 30px 0px;
        height: 170px;
        border-bottom: 1px solid #aaaaaa;
        margin: 0px 50px;
    `
    const Img = styled.img`
        width: 80px;
        height: 110px;
    `

    const A = styled.a`
        padding: 30px 50px;
        text-decoration: none;
        color: #000000;
        font-size: 22px;
        width: 500px;
    `;

    const Form = styled.form`
        margin: 22px;
    `;

    const Input = styled.input`
        width: 70px;
        font-size: 18px;
        padding: 10px;
    `;

    const PriceCart = styled.span`
        font-size: 28px;
        margin: 26px 0px 0px 150px;
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

    const BuyCart = styled.div`
        text-align: end;
        width: 95%;
        margin: 50px 0px;
    `;

    const ButtonBuy = styled.button`
        background-color: #1d232d;
        padding: 10px 20px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        color: #ffffff;
        font-size: 20px;
        border: 1px solid #1d232d;
    `;

export default () => {

    return (
        <Section>
        <ArticleCart>
            <TitleCart>
                <H3>Carrito</H3>
            </TitleCart>
            <ContentCart>
                <Img src="https://i11b.3djuegos.com/juegos/12333/resident_evil_2__2015_/fotos/ficha/resident_evil_2__2015_-4765181.jpg" alt=""/>
                <A href="">Resident Evil 2</A>       
                <Form>
                    <label>
                    <Input type="number"/>
                    </label>
                </Form>
                <PriceCart>$ 1.700</PriceCart>
            </ContentCart>
            <ContentCart>
                <Img src="https://i11b.3djuegos.com/juegos/12333/resident_evil_2__2015_/fotos/ficha/resident_evil_2__2015_-4765181.jpg" alt=""/>
                <A href="">Resident Evil 2</A>       
                <Form>
                    <label>
                    <Input type="number"/>
                    </label>
                </Form>
                <PriceCart>$ 1.700</PriceCart>
            </ContentCart>
            <ContentCart>
                <TotalCart>Total: <Price>$ 3.400</Price></TotalCart>
            </ContentCart>
            <BuyCart>
                <ButtonBuy>Comprar</ButtonBuy>
            </BuyCart>
        </ArticleCart>
    </Section>
    );
};
