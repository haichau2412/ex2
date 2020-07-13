import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const NavLink = styled.p`
  cursor: pointer;
  margin-bottom: 2rem;
  color: #27ae60;
  text-decoration: underline;
`;

export const LoadingIcon = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  animation: ${rotate} 1s linear infinite;

  svg {
    width: 100%;
    height: 100%;
    fill: "#27ae60";
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 2rem 3rem;
  font-size: 1.6rem;

  form {
    width: 30rem;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
    form {
      width: 20rem;
    }
  }
`;
export const FormTitle = styled.span`
  font-weight: 700;
  display: block;
  font-size: 3rem;
  text-align: center;
  line-height: 1.2;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  outline: none;
  border: none;
  color: white;
  padding: 1rem 2rem;
  width: 100%;
  text-align: center;
  display: block;
  margin: 1rem auto;
  cursor: pointer;
  font-size: 1.6rem;
  background-color: #27ae60;
`;

export const ErrorDiv = styled.div`
  margin-top: 0.2rem;
  height: 2rem;
  font-size: 1.4rem;
  line-height: 1.4rem;
  color: #c0392b;
`;

export const InputField = styled.div`
  position: relative;
  margin: 1rem 0;
`;

export const Label = styled.label`
  font-family: "Roboto";
  font-weight: 900;
  position: absolute;
  top: -1rem;
  left: 1rem;
  padding: 0 1rem;
  text-transform: uppercase;
  background-color: #fff;
`;

export const Input = styled.input`
  font-size: 1.4rem;
  padding-left: 2rem;
  width: 100%;
  display: block;
  line-height: 3;
  outline: none;
  border: none;
  background-color: #dfe6e9;
  @media (max-width: 375px) {
    font-size: 1.2rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 5rem;

  @media (max-width: 1024px) {
    padding: 10rem 5rem;
  }
`;
