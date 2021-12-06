import React from "react";
import styled from "styled-components";
const StyledButton = styled.button`
  background-color: #e3e6c7 !important;
  background: linear-gradient(90.76deg, #ff9d2a 3.46%, #ffd707 102.26%);
  border-radius: 40px;
  max-width: 300px;
  padding: 5px 0;
  display: flex;
  outline: none;
  cursor: not-allowed;
  border: none;
  position: relative;
  text-decoration: none;
  width: auto;
  border-radius: 25px;
  border: 0;
  padding: 0.65rem 1.65rem;
  font-size: 14px;
  box-shadow: 0px 4px 97px rgba(255, 153, 0, 0.51);
`;
export const Button = (props) => {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
};
