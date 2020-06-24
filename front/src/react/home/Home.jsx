import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

export default () => {

    const Slider = styled.div`
        padding: 20px 50px;
    `;
    const SliderImg = styled.img`
        width: 100%;
        height: 500px;
    `;
    const Section = styled.section`
        padding: 20px 100px;
    `;
    const TitleSection = styled.h2`
        font-size: 45px;
        padding: 50px 0px;
    `;
    const Article = styled.article`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    `;
    const CardGame = styled.div`
        width: 200px;
        padding-bottom: 10px;
        box-shadow: 0px 4px 5px 2px rgba(189,189,189,1);
        margin-top: 30px;
        margin-right: 20px;
    `;

    const CardGameImg = styled.img`
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

    return(
        <div>
            <Slider>
                <SliderImg src="https://cdn2.unrealengine.com/Diesel%2Fproductv2%2Fgrand-theft-auto-v%2Fhome%2FGTAV_EGS_Artwork_1920x1080_Hero-Carousel_V06-1920x1080-1503e4b1320d5652dd4f57466c8bcb79424b3fc0.jpg?h=1080&resize=1&w=1920"/>
            </Slider>

            <Section>
                <TitleSection>Nuevos videojuegos</TitleSection>
                <Article>
                    <CardGame>
                        <CardLink href="">
                            <CardGameImg src="https://i11c.3djuegos.com/juegos/12333/resident_evil_2__2015_/fotos/ficha/resident_evil_2__2015_-4765182.jpg"/>
                            <div class="cardContent">
                                <CardContentP>
                                    <CardLink href="">Resident Evil 2</CardLink>
                                </CardContentP>
                                <PriceGame>1700 <span>Ars</span></PriceGame>
                            </div>
                        </CardLink>
                    </CardGame>
                    <CardGame>
                        <CardLink href="">
                            <CardGameImg src="https://i11c.3djuegos.com/juegos/12333/resident_evil_2__2015_/fotos/ficha/resident_evil_2__2015_-4765182.jpg"/>
                            <div class="cardContent">
                                <CardContentP>
                                    <CardLink href="">Resident Evil 2</CardLink>
                                </CardContentP>
                                <PriceGame>1700 <span>Ars</span></PriceGame>
                            </div>
                        </CardLink>
                    </CardGame>
                </Article>
            </Section>
        </div>
    )
};
