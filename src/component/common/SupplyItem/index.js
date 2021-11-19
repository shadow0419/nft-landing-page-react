import React from "react";
import styled from "styled-components";
import { Text } from "../Text";
import { Col } from "../Layout";

export const SupplyItem = (props) => {
  return (
    <Col
      align="center"
      borderRadius="45px"
      backgroundColor="#1E1459"
      padding="10px 10px 10px 10px"
      height="fit-content"
    >
      <Col backgroundColor="#ffffff" borderRadius="38px">
        <img
          src={props.img}
          alt="supply"
          style={{ borderRadius: "38px" }}
          width="100%"
          height="100%"
        />
      </Col>
      <Text fontSize="20px" lineHeight="62.04px">
        Clothe
      </Text>
      <Text fontSize="14px">Clothe</Text>
    </Col>
  );
};
