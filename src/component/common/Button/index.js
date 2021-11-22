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
  cursor: pointer;
  border: none;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  width: auto;
  border-radius: 25px;
  border: 0;
  padding: 0.65rem 1.65rem;
  font-size: 14px;
  box-shadow: 0px 4px 97px rgba(255, 153, 0, 0.51);
  :hover {
    box-shadow: 0px 4px 97px rgba(255, 153, 0, 0.81);
  }
  :before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  :hover:before {
    opacity: 1;
  }
`;
export const Button = (props) => {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
};
