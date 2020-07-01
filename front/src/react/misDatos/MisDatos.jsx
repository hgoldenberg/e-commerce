import React from "react";
import styled from 'styled-components';

const DivContainer = styled.div`
    padding: 50px 100px;
    width: 100%;
    margin: 0 auto;
    height: 100%;
`;

const DivMisDatos = styled.div`
    margin: 0 auto;
    display: flex;
    max-width: 800px;
    flex-direction: column;
`;

const DivContentData = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 5px 2px rgba(189, 189, 189, 1);
  padding: 20px 50px;
`;

const H2 = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 25px;
`;

const DivData= styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 0px;
  border-top: 2px solid #eee;
  color: #777;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

const DivImg = styled.div`
  width: 100%;
  padding: 20px 0px;
`;

const H3 = styled.h3`
  font-size: 20px;
  font-weight: 300;
  width: 40%;
  margin: 0px;
`;

const P = styled.p`
  width: 60%;
  font-weight: 300;
  margin: 0px;
`;

const Button = styled.button`
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: #1d232d;
  font-size: 18px;
  border: 1px solid #1d232d;
  margin: 5px 5px;
  margin-left: 150px
`;

export default ({ isLogged }) => {
  console.log(isLogged.name);
  return (
    <DivContainer>
      <DivMisDatos>
        <H2>Mis datos</H2>
        <DivContentData>
          <DivImg>
            {isLogged.avatar ?
              <Img src={isLogged.avatar}/>
            :
            <svg
                width="100px"
                height="100px"
                viewBox="0 0 16 16"
                class="bi bi-person-circle"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                <path
                  fill-rule="evenodd"
                  d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
                <path
                  fill-rule="evenodd"
                  d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                />
              </svg>
            }          
          <Button>Configurar datos</Button>
          </DivImg>
          <DivData>
              <H3>Nombre y apellido:</H3>
              <P>{isLogged.name} {isLogged.lastname}</P>
          </DivData>
          <DivData>
              <H3>Email:</H3>
              <P>{isLogged.email}</P>
          </DivData>
          <DivData>
              <H3>Dirección:</H3>
              <P>{isLogged.direccion}</P>
          </DivData>
        </DivContentData>
      </DivMisDatos>
    </DivContainer>
  );
};
