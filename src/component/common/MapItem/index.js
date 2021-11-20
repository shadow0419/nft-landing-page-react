import React from "react";
import styled from "styled-components";

import { Text } from "../Text";

export const ItemView = styled.div`
  position: relative;
  width: 600px;
  height: 210px;
  margin: 0;
  @media only screen and (max-width: 1400px) {
    width: 590px;
  }
`;
const StyledItem = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 10;
  padding: 20px 26px 27px 48px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(70px);
  border-radius: 60px;
  height: 180px;
  width: 600px;
  margin-top: 40px;
`;
const Datetap = styled.div`
  background: #16beaa;
  position: absolute;
  border-radius: 25px;
  width: 150px;
  height: 60px;
  z-index: 0;
  right: 40px;
  padding: 10px 0 0 0;
  text-align: center;
`;
export const MapItem = (props) => {
  return (
    <ItemView direction={props.direction}>
      <Datetap>
        <Text fontSize="20px">{props.date}</Text>
      </Datetap>
      <StyledItem>
        <Text fontSize="23px" lineHeight="50.18px">
          {props.title}
        </Text>
        <Text
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
