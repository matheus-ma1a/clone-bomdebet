import React from "react";
import { styled } from 'styled-components';

function Button() {

  const Button = styled.button`
  margin-top: 2rem;
  height: 42px;
  grid-column-gap: 16px;
  color:#171717;
  white-space: nowrap;
  background-image: linear-gradient(#ffef8f,#ffef8f);
  border: 1px solid rgba(218,209,177,.1);
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  position: relative;
  `
  const P = styled.p`

    font-size: x-small; 
    text-align: center;
    font-weight: 100;

  `

  return (
    <>
      <Button>
        Cadastrar
      </Button>
      <P>Ao clicar no botão Criar conta, você aceita<br/> nossos termos de uso e política de <br/>privacidade.</P>
    </>
  );
}

export default Button;