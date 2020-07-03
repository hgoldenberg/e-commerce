import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import f from '../../assets/scss/forms.scss';

const DivContainer = styled.div`
    padding: 40px 0px
`;

const FormContainer = styled.div`
    margin: 0 auto;
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
margin: 10px 0px;
`;

const Input = styled.input`

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
margin-top: 30px;
`;

const Span = styled.span`
display: block;
margin: 20px 0px;
`;

const Error = styled.p`
    color: #e04439;
    margin: 0px;
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
        <DivContainer>
        <FormContainer>
            <FormTitle>Registrar</FormTitle>
            <Form onSubmit={handleSubmit} >

                <Label>Name:</Label>
                <Input 
                className={errorName ? f.errorInput : null}
                type="text" 
                placeholder="Ingrese su nombre"
                onChange={nameChange}
                name="name" 
                value={name}
                />
                {errorName ? 
                (<Error>
                    El nombre no puede contener números ni carácteres especiales
                </Error>):null}

                <Label>Last Name:</Label>
                <Input 
                type="text" 
                className={errorLast ? f.errorInput : null}
                placeholder="Ingrese su apellido"
                onChange={lastNameChange}
                name="text" 
                value={lastName}
                />
                {errorLast ? 
                (<Error>
                    El apellido no puede contener números ni carácteres especiales
                </Error>):null}
                

                <Label>Address:</Label>
                <Input 
                type="text" 
                className={errorAddress ? f.errorInput : null}
                placeholder="Ingrese su dirección"
                onChange={addressChange}
                name="address" 
                value={address}
                />
                {errorAddress ? 
                (<Error>
                    La dirección no puede contener carácteres especiales
                </Error>):null}
                

                <Label>Email:</Label>
                <Input 
                type="email" 
                className={errorEmail ? f.errorInput : null}
                placeholder="Ingrese su email"
                onChange={emailChange}
                name="email" 
                value={email}
                />
                {errorEmail ? 
                (<Error>
                    El email debe contener una dirección válida
                </Error>):null}
                
                
                <Label>Password:</Label>
                <Input 
                type="password" 
                className={errorPass ? f.errorInput : null}
                placeholder="Ingrese su contraseña"
                onChange={passwordChange}
                name="password" 
                value={password}
                />
                {errorPass ? 
                (<Error>
                    El password debe comenzar con una mayúscula, tener una minúscula y al menos 8 digitos
                </Error>):null}
                
                {errorPass || 
                errorName ||
                errorLast ||
                errorEmail ||
                errorAddress ? (null):(<InputSubmit type="submit" value="Registrar" />)}
    
            </Form>
            <Span>Si tienes una cuenta <Link to="/login">Acceder</Link></Span>
        </FormContainer>
        </DivContainer>
    )

}
    

    


