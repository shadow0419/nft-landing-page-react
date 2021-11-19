import React from "react";
import styled from "styled-components";
import { Text } from "../Text";
const StyledRec = styled.div`
  background: ${(props) =>
    `linear-gradient(95.03deg, ${props.gfcolor} 0%, ${props.glcolor} 103.72%)`};
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 50px;
  z-index: ${(props) => 30 - props.index};
  width: calc(${(props) => props.width}% + 20px);
`;
export const CountItem = ({ item, index }) => {
  return (
    <StyledRec
      index={index}
      width={item.percent}
      gfcolor={item.gfcolor}
      glcolor={item.glcolor}
    >
      <Text>{item.percent}%</Text>
    </StyledRec>
  );
};
