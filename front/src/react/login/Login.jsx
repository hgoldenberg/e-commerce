import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

export default () => {

    const FormContainer = styled.div`
        background-color: #fff;
        margin: 100px 450px;
        padding-bottom: 30px;
        padding: 30px 20px 30px;
        border-radius: 10px;
        border: 1px solid #ccc;
    `;

    const FormTitle = styled.h2`
        padding-bottom: 20px;
        font-weight: 100;
        font-size: 26px;
        text-align: center;
    `;

    const Form = styled.form`
        display: flex;
        flex-direction: column;
    `;

    const Label = styled.label`
        font-size: 18px;
        color: #777;
    `;

    const Input = styled.input`
        margin-bottom: 20px;
        height: 25px;
        font-size: 18px;
        color: #474747;
        padding: 15px 5px
    `;

    const InputSubmit = styled.input`
        background-color: #1d232d;
        border: none;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 8px 0px;
        cursor: pointer;
        color: #fff;
        font-size: 22px;
        font-weight: 700;
    `;

    const Span = styled.span`
        display: block;
        margin: 20px 0px;
    `;
    
    return(
        <FormContainer>
            <FormTitle>Acceder</FormTitle>
            <Form >
            <Label>Email:</Label>
            <Input type="email"/>
            <Label>Password:</Label>
            <Input type="password"/>
            
            <InputSubmit type="submit" value="Acceder"/>
            </Form>
            <Span>Si no tienes una cuenta <Link to="/registro">Registrarse</Link></Span>
        </FormContainer>
    )
};
