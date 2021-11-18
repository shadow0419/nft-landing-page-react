import React, { useState } from "react";
// import Collapsible from "react-collapsible";
import styled from "styled-components";
import { Text } from "../Text";

export const StyledCollapse = styled.div`
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(40px);
  border-radius: 45px;
`;
export const Collapse = () => {
  const [hide, setHide] = useState(false);

  return (
    <StyledCollapse>
      <Text fontSize="32px">
        This is the collapsible content. It can be any element or React
        component you like.
      </Text>
    </StyledCollapse>
  );
};
