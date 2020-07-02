import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import ReactStars from "react-rating-stars-component";

const DivContainer = styled.div`
    padding: 0px 100px;
    width: 100%;
    margin: 0 auto;
    height: 100%;
`;

const DivReview = styled.div`
    margin: 0 auto;
    display: flex;
    max-width: 700px;
    flex-direction: row;
`;

const DivContent = styled.div`
    padding: 50px 0px;
    width: 100%;
`;
const H2 = styled.h2`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 25px;
`;

const Content = styled.div`
    background-color: #fcfcfc;
    box-shadow: 0px 4px 5px 2px rgba(189, 189, 189, 1);
    display: flex;
    flex-direction: column;
    padding: 40px;
`;

const DivProducto = styled.div`
    display: flex;
    flex-direction: row;
`;


const DivButton = styled.div`
    width: 50%;
    text-align: end;
`;

const ButtonVolver = styled.button`
    background-color: #1d232d;
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    border: 1px solid #1d232d;
    width: 40%;
`;

const Img = styled.img`
    width: 150px;
    heigth: 200px;
`;

const DivImg = styled.div`
    width: 40%;
`;

const DivReviewData = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
`;

const Data = styled.div`
    padding-bottom: 10px;
`;

const H3 = styled.h3`
    font-size: 18px;
    font-weight: 300;
`;

const Stars = styled.p`
    font-size: 22px;
    margin: 5px 0px;
    color: #ccc;
`;

const Form = styled.form`
    margin-top: 20px;
`;

const Textarea = styled.textarea`
    width: 100%;
    height: 150px;
    padding: 5px;
    color: #777;
`;

export default ({product,handleChangeComment, handleChange, handleClick, stars, comentario, user}) => {    
    return(
        <DivContainer>
            <DivReview>
                <DivContent>
                    <Content>
                        <H2>{product.name}</H2>
                        <DivProducto>
                            <DivImg>
                                <Img src={product.imageUno} />     
                            </DivImg>
                            <DivReviewData>
                                <Data>
                                    <H3>¿Cuántas estrellas le darías?</H3>
                                    <ReactStars
                                        count={5}
                                        onChange={handleChange}
                                        size={24}
                                        color2={"#ffd700"}
                                        value={stars}
                                    />
                                </Data>
                                <Data>
                                    <H3>Coméntanos sobre el producto</H3>
                                    <Form>
                                        <Textarea name="comentario" onChange={handleChangeComment} value={comentario}></Textarea>
                                    </Form>
                                </Data>
                                <ButtonVolver onClick={handleClick}>Agregar Review</ButtonVolver>
                            </DivReviewData> 
                                                                            
                        </DivProducto>                       
                    </Content>
                </DivContent>
            </DivReview>
        </DivContainer>
    )
};