import { useState } from 'react'
import styled from 'styled-components'
import Cadastro from './components/Cadastro'


function App() {

  const Bg = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url("/Screenshot_1.png");
    background-repeat: no-repeat;
    background-size: cover;
  `

  const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  `


  return (
    <>
      <Bg />
      <Modal>
        <Cadastro />
      </Modal>
    </>
  )
}

export default App
