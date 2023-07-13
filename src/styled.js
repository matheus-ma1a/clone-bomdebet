import { styled } from 'styled-components';

export const DivMain = styled.div`

  background-color: #1e1e1d;
  border-radius: 20px;
  height: 70%;
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  
  h1{
    font-size: 22px;
    text-align: start;
    font-weight: 600;
  }
  
  p{
    color: #606061;
    font-size: 0.8rem;
    margin-bottom: 25px
  }
  
  @media (max-width: 1000px) {
    
    display: flex;
    justify-content: center;
    background-color: transparent;

    h1{
      font-size: 1.2rem;
      text-align: center;
    }
    
    p{
      font-size: 0.8rem;

      text-align: center;
    }

  }

`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: 75%;
  padding: 0 2.8rem;
  
  @media (max-width: 1000px) {
    padding: 0 0;
    
  }

`
export const Input = styled.input`
  background-color: transparent;
  border: none;
  font-weight: 700;
  color: white;
  height: 100%;
  width: 100%;
  outline: none;
`

export const Button = styled.button`
  font-weight: 700;  margin-top: 2rem;
  height: 42px;
  grid-column-gap: 16px;
  color: #171717;
  white-space: nowrap;
  background-image: linear-gradient(#ffef8f, #ffef8f);
  border: 1px solid rgba(218, 209, 177, .1);
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  position: relative;
`

export const Wapper = styled.div`
  padding-left: 15px;
  display: flex;
  align-items: center;
  gap: 20px;
  height: 42px;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid   ${({ isFocused }) => (isFocused ? '#ffef8f' : '#373737')};
  background-color: #292927;

  
  @media (max-width: 1000px) {
    background-color: #20202b;
    
  }

`

export const Img = styled.img`
  border-radius: 20px;
  height: 100%;
  width: 40%;
  object-fit: cover;
  box-shadow: -2px -1px 34px -7px #ffee8f7a;

  @media (max-width: 1000px) {
    display: none;
  }

`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(20, 20, 20, 0.966);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  
  @media (max-width: 1000px) {
    
    background-color: transparent;
  }

`

export const Bg = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/Screenshot_1.png");
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 1000px) {
    background: #171724;
  }

`

export const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const FooterP = styled.div`
  color: #7c7c7c;
  font-size: 0.7rem;
  text-align: center;
  font-weight: 300;
`