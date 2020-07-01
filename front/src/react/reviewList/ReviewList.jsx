import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

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
    align-items: center;
    padding: 15px;
`;

const Button = styled.button`
    background-color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    color: #1d232d;
    font-size: 16px;
    border: 1px solid #1d232d;
`;

const Producto = styled.div`
    width: 50%;
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
    margin: 0 auto;
    margin-top: 30px;
    width: 30%;
`;

export default () => {    
    return(
        <DivContainer>
            <DivReview>
                <DivContent>
                    <H2>Reviews</H2>
                    <Content>
                        <DivProducto>
                            <Producto>GTA V</Producto>
                            <DivButton>
                                <Link to="/reviews/2"><Button>Agregar Review</Button></Link>
                            </DivButton>                            
                        </DivProducto>
                        <DivProducto>
                            <Producto>Resident Evil 2</Producto>
                            <DivButton>
                                <Link to="/reviews/3"><Button>Agregar Review</Button></Link>
                            </DivButton>                            
                        </DivProducto>
                        <ButtonVolver>Seguir comprando</ButtonVolver>
                    </Content>
                </DivContent>
            </DivReview>
        </DivContainer>
    )
};