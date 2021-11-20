import React from "react";
import styled from "styled-components";
import { Text } from "../Text";
import { Col } from "../Layout";
const StyledRec = styled.div`
  position: relative;
  background: ${(props) =>
    `linear-gradient(95.03deg, ${props.gfcolor} 0%, ${props.glcolor} 103.72%)`};
  border-top-right-radius: 35px;
  border-bottom-right-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 50px;
  z-index: ${(props) => 30 - props.index};
  width: calc(${(props) => props.width}% + 20px);
`;
const StyledTip = styled.div`
  position: absolute;
  top: -30px;
`;
export const CountItem = ({ item, index }) => {
  return (
    <StyledRec
      index={index}
      width={item.width}
      gfcolor={item.gfcolor}
      glcolor={item.glcolor}
    >
      <Text align="right" fontSize="30px">
        {item.percent}%
      </Text>
      <StyledTip>
        <Col
          width="100%"
          height="40px"
          backgroundColor="white"
          borderRadius="30px"
          padding="10px"
        >
          <Text
            align="center"
            color="#333333"
            fontWeight="500"
            fontSize="20px"
            position="relative"
          >
            1000000000000
            <Col
              width="30px"
              height="30px"
              backgroundColor="white"
              borderRadius="100%"
              padding="10px"
              position="absolute"
            />
          </Text>
        </Col>
      </StyledTip>
    </StyledRec>
  );
};
