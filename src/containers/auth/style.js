import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, #10ac84, #1dd1a1);
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
