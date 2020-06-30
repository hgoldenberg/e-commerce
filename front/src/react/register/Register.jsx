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

    

    export default ({ passwordChange, 
        emailChange, 
        nameChange, 
        lastNameChange, 
        addressChange, 
        handleSubmit, 
        email, 
        password, 
        name, 
        lastName,
        address,
        errorName,
        errorLast,
        errorEmail,
        errorAddress,
        errorPass,
        tipo }) => {
    

      return(
        <FormContainer>
            <FormTitle>Registrar</FormTitle>
            <Form onSubmit={handleSubmit} >

                <Label>Name:</Label>
                <Input 
                type="text" 
                placeholder="Ingrese su nombre"
                onChange={nameChange}
                name="name" 
                value={name}
                />
                {errorName ? 
                (<p>
                    EL nombre no puede contener números ni carácteres especiales
                </p>):null}

                <Label>Last Name:</Label>
                <Input 
                type="text" 
                placeholder="Ingrese su apellido"
                onChange={lastNameChange}
                name="text" 
                value={lastName}
                />
                {errorLast ? 
                (<p>
                    EL apellido no puede contener números ni carácteres especiales
                </p>):null}
                

                <Label>Address:</Label>
                <Input 
                type="text" 
                placeholder="Ingrese su dirección"
                onChange={addressChange}
                name="address" 
                value={address}
                />
                {errorAddress ? 
                (<p>
                    La dirección no puede contener carácteres especiales
                </p>):null}
                

                <Label>Email:</Label>
                <Input 
                type="email" 
                placeholder="Ingrese su email"
                onChange={emailChange}
                name="email" 
                value={email}
                />
                {errorEmail ? 
                (<p>
                    El email debe contener una dirección válida
                </p>):null}
                
                
                <Label>Password:</Label>
                <Input 
                type="password" 
                placeholder="Ingrese su contraseña"
                onChange={passwordChange}
                name="password" 
                value={password}
                />
                {errorPass ? 
                (<p>
                    El password debe comenzar una mayúscula, una minúscula y 8 digitos
                </p>):null}
                
                {errorPass || 
                errorName ||
                errorLast ||
                errorEmail ||
                errorAddress ? (null):(<InputSubmit type="submit" value="Registrar" />)}
    
            </Form>
            <Span>Si tienes una cuenta <Link to="/login">Acceder</Link></Span>
        </FormContainer>
    )

}
    

    


