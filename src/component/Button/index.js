import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
const StyledButton = styled.button`
  color: ${theme.primaryBtn} !important;
  background-color: #e3e6c7 !important;
  cursor: pointer;
  text-decoration: none;
  width: auto;
  border-radius: 25px;
  border: 0;
  padding: 0.65rem 1.65rem;
  font-size: 14px;
  :hover {
    color: red;
  }
`;
export const Button = (props) => {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
};
