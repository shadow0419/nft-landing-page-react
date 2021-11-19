import React from "react";
import styled from "styled-components";
import { Text } from "../Text";
const StyledRec = styled.div`
  background: ${(props) =>
    `linear-gradient(95.03deg, ${props.gfcolor} 0%, ${props.glcolor} 103.72%)`};
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 30px;
`;
export const CountItem = ({ item }) => {
  console.log(
    `linear-gradient(95.03deg, ${item.gfcolor} 0%, ${item.glcolor} 103.72%)`
  );
  return (
    <StyledRec width={item.width} gfcolor={item.gfcolor} glcolor={item.glcolor}>
      <Text>{item.percent}%</Text>
    </StyledRec>
  );
};
