import React from 'react'
import { styled } from 'styled-components';
import Button from './Button';

function Cadastro() {

  const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 5px;
  `

  const Input = styled.input`
    height: 2.5rem ;
    width: 15rem;
    padding-left: 10px;
    border-radius: 8px;
    border: 1px solid #363534 ;
    background-color: #252523;
    color: #646463;
    font-weight: 700;
  `
  
  return ( 
    <div>
      <Form>
        <Input placeholder='Nome de usuário' type="text" name="name" />
        <Input placeholder='Digite setu CPF' type="text" name="cpf" />
        <Input placeholder='E-mail' type="text" name="email" />
        <Input placeholder='Senha' type="password" name="password" />
        <Input placeholder='Whatsapp' type="text" name="telefone" />
        <Button />
      </Form>
    </div>
   );
}

export default Cadastro;