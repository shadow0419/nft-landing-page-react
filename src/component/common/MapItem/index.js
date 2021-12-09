import React from "react";
import styled from "styled-components";

import { Text } from "../Text";

export const ItemView = styled.div`
  position: relative;
  width: auto;
  height: 210px;
  margin: 0;
`;
const StyledItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 10;
  padding: 20px 26px 27px 48px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(70px);
  border-radius: 30px;
  width: 100%;
  margin-top: 40px;
  cursor: pointer;
  :before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #00ffd5,
      #002bff,
      #ff7300,
      #fffb00,
      #48ff00,
      #ff00c8,
      #ff0000,
      #7a00ff
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
    border-radius: 20px;
  }

  :active {
    color: #000;
  }

  :active:after {
    background: transparent;
  }

  :hover:before {
    opacity: 1;
  }
`;
const Datetap = styled.div`
  background: #16beaa;
  position: absolute;
  border-radius: 25px;
  width: 150px;
  height: 60px;
  z-index: 0;
  right: 10%;
  padding: 10px 0 0 0;
  text-align: center;
  cursor: pointer;
`;
export const MapItem = (props) => {
  return (
    <ItemView direction={props.direction}>
      <Datetap>
        <Text fontFamily="Gilroy-Medium !important" fontSize="20px">
          {props.date}
        </Text>
      </Datetap>
      <StyledItem>
        <Text fontFamily="Gilroy-Medium !important" fontSize="23px">
          {props.title}
        </Text>
        <Text
          fontFamily="Gilroy-Medium !important"
          fontSize="18px"
          lineHeight="34.5pxpx"
          margin="15px 0 0 0"
          width="100%"
          maxWidth="750px"
        >
          {props.content}
        </Text>
      </StyledItem>
    </ItemView>
  );
};
