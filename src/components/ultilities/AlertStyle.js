import styled from "styled-components";

const color = {
  warning: "#f39c12",
  error: "#c0392b",
  success: "#27ae60",
};

export const StyledAlert = styled.div`
  position: fixed;
  top: 1rem;
  padding: 1rem;
  border: 2px solid ${(props) => color[props.type]};
  background-color: #fff;
  font-size: 1.6rem;
  color: ${(props) => color[props.type]};
  font-weight: 500;
  display: ${(props) => (props.show ? "block" : "none")};
`;
