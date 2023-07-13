import React, { useState } from 'react'
import { Form, Input, Button, Wapper, Img, DivMain, FooterP } from '../../styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faAddressCard, faEnvelope, faLock, } from '@fortawesome/free-solid-svg-icons'
import { BsWhatsapp } from 'react-icons/Bs';

function Cadastro() {
  const [isFocused, setIsFocused] = useState([false, false, false, false, false]);



  const handleFocus = (index) => {
    const updatedIsFocused = [...isFocused];
    updatedIsFocused[index] = true;
    setIsFocused(updatedIsFocused);
  };

  const handleBlur = (index) => {
    const updatedIsFocused = [...isFocused];
    updatedIsFocused[index] = false;
    setIsFocused(updatedIsFocused);
  };


  return (
    <DivMain className='div-main'>

      <Img src="/6499e81741c50c067aeaa43d_banner_auth_1.webp" alt="" />

      <Form>
        <div >
          <h1>Estamos te esperando para mais uma rodada!</h1>
          <p>Insira seus dados e comece a diversão</p>
        </div>
        <Wapper isFocused={isFocused[0]} >
          <FontAwesomeIcon icon={faUser} style={{ color: "#ffef8f", }} />
          <Input
            onFocus={() => handleFocus(0)}
            onBlur={() => handleBlur(0)}
            placeholder='Nome de usuário'
            type="text"
            name="name" />
        </Wapper>
      <Wapper isFocused={isFocused[1]} >
        <FontAwesomeIcon icon={faAddressCard} style={{ color: "#ffef8f", }} />
        <Input
          onFocus={() => handleFocus(1)}
          onBlur={() => handleBlur(1)}
          placeholder='Digite setu CPF'
          type="text"
          name="cpf" />
      </Wapper>
      <Wapper isFocused={isFocused[2]} >
        <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffef8f", }} />
        <Input
          onFocus={() => handleFocus(2)}
          onBlur={() => handleBlur(2)}
          placeholder='E-mail'
          type="text"
          name="email" />
      </Wapper>
      <Wapper isFocused={isFocused[3]} >
        <FontAwesomeIcon icon={faLock} style={{ color: "#ffef8f", }} />
        <Input
          onFocus={() => handleFocus(3)}
          onBlur={() => handleBlur(3)}
          placeholder='Senha'
          type="password"
          name="password" />
      </Wapper>
      <Wapper isFocused={isFocused[4]} >
        <BsWhatsapp style={{ color: "#ffef8f", }} />
        <Input
          onFocus={() => handleFocus(4)}
          onBlur={() => handleBlur(4)}
          placeholder='Whatsapp'
          type="text"
          name="telefone" />
      </Wapper>
      <Button>
        cadastrar
      </Button>
      <FooterP>
        Ao clicar no botão Criar conta, você aceita<br /> nossos termos de uso e política de <br />privacidade.
      </FooterP>
    </Form>

    </DivMain >
  );
}

export default Cadastro;