import React from "react";
import { Text } from "../Text";
import { Col } from "../Layout";
import styled from "styled-components";
const SupplyStyle = styled.div`
  align-items: center;
  border-radius: 45px;
  background-color: #1e1459;
  padding: 10px 10px 10px 10px;
  height: fit-content;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;
export const Product = styled.img`
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.height ? props.height : "auto")};
  border-radius: 38px;
  max-width: 240px;
  transition: transform 0.2s;
  :hover {
    transform: scale(1.4);
  }
`;
export const SupplyItem = (props) => {
  return (
    <SupplyStyle>
      <Col
        backgroundColor="#ffffff"
        borderRadius="38px"
        padding="4px"
        align="center"
      >
        <Product src={props.img} height={props.height} />
      </Col>
      <Text fontSize="20px" lineHeight="62.04px">
        {props.title}
      </Text>
      <Text fontSize="14px">{props.type}</Text>
    </SupplyStyle>
  );
};
