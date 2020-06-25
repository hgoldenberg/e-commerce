import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const FormContainer = styled.div`
    margin: 0 auto;
    margin-top: 50px;
    background-color: #fff;
    padding-bottom: 30px;
    padding: 30px 20px 30px;
    border-radius: 10px;
    border: 1px solid #ccc;
    width: 500px;
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

export default ({ handleInputEmail, handleInputPass, handleSubmit, handleInputName,handleInputLastName,handleInputDirection }) => {

    return(
        <FormContainer>
            <FormTitle>Registrar</FormTitle>
            <Form onSubmit={handleSubmit}>
                <Label>Name:</Label>
                <Input type="text" onChange={handleInputName}/>
                <Label>Last Name:</Label>
                <Input type="text" onChange={handleInputLastName}/>
                <Label>Direction:</Label>
                <Input type="text" onChange={handleInputDirection}/>
                <Label>Email:</Label>
                <Input type="email" onChange={handleInputEmail}/>
                <Label>Password:</Label>
                <Input type="password" onChange={handleInputPass}/>
                
                <InputSubmit type="submit" value="Registrar" />
            </Form>
            <Span>Si tienes una cuenta <Link to="/login">Acceder</Link></Span>
        </FormContainer>
    )
}