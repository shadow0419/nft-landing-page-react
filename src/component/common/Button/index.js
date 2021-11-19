import React from "react";
import styled from "styled-components";
const StyledButton = styled.button`
  background-color: #e3e6c7 !important;
  background: linear-gradient(90.76deg, #ff9d2a 3.46%, #ffd707 102.26%);
  border-radius: 40px;
  max-width: 300px;
  padding: 5px 0;
  display: flex;
  width: 100%;
  outline: none;
  cursor: pointer;
  border: none;
  cursor: pointer;
  text-decoration: none;
  width: auto;
  border-radius: 25px;
  border: 0;
  padding: 0.65rem 1.65rem;
  font-size: 14px;
`;
export const Button = (props) => {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
};
