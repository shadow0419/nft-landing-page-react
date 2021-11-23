import React, { useState } from "react";
import styled from "styled-components";
import { Text } from "../Text";
import Collapsible from "react-collapsible";
import { Row } from "../Layout";
import arrow from "../../../assets/arrow.png";

const StyledCollapse = styled.div`
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(4px);
  border-radius: 45px;
  padding: 20px 35px;
  width: 100%;
`;
const Arrow = styled.img`
  width: 10px;
  cursor: pointer;
  transform: ${(props) => (props.hide ? "rotate(0deg)" : "rotate(180deg)")};
  transition: transform 0.4s;
`;
const StyledContent = styled.p`
  font-family: "Gilroy-Medium";
  color: white;
`;
export const Collapse = (props) => {
  const [hide, setHide] = useState(false);

  return (
    <StyledCollapse>
      <Row
        justify="space-between"
        onClick={() => {
          setHide(!hide);
        }}
      >
        <Text
          cursor="pointer"
          onClick={() => {
            setHide(!hide);
          }}
        >
          {props.title}
        </Text>
        <Arrow
          hide={hide}
          src={arrow}
          onClick={() => {
            setHide(!hide);
          }}
        />
      </Row>
      <Collapsible open={hide}>
        <StyledContent>{props.content}</StyledContent>
      </Collapsible>
    </StyledCollapse>
  );
};
