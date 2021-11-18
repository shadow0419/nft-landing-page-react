import React, { useState } from "react";
// import Collapsible from "react-collapsible";
import styled from "styled-components";
import { Text } from "../Text";
import Collapsible from "react-collapsible";
import { Row } from "../Layout";

export const StyledCollapse = styled.div`
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(40px);
  border-radius: 45px;
  padding: 15px 35px;
`;
export const Collapse = () => {
  const [hide, setHide] = useState(false);

  return (
    <StyledCollapse>
      <Row>
        <Text
          cursor="pointer"
          onClick={() => {
            setHide(!hide);
          }}
        >
          OX
        </Text>
      </Row>
      <Collapsible open={hide}>
        <p>
          This is the collapsible content. It can be any element or React
          component you like. It can even be another Collapsible component.
          Check out the next
        </p>
      </Collapsible>
    </StyledCollapse>
  );
};
