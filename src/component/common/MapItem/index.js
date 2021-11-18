import React from "react";
import styled from "styled-components";

import { Text } from "../Text";
export const ItemView = styled.div`
  position: relative;
  width: 100%;
  min-height: 210px;
  max-width: 750px;
`;
const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 10;
  position: absolute;
  padding: 20px 45px 45px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(70px);
  border-radius: 60px;
  min-height: 210px;
`;
const Datetap = styled.div`
  background: #16beaa;
  border-radius: 25px;
  position: absolute;
  width: 197px;
  height: 76px;
  z-index: 0;
  top: -41px;
  right: 66px;
  padding: 3px 53px 0 53px;
  text-align: center;
`;
export const MapItem = () => {
  return (
    <ItemView>
      <Datetap>
        <Text fontSize="22px" lineHeight="34.5pxpx">
          2021 Q4
        </Text>
      </Datetap>
      <StyledItem>
        <Text fontSize="32px" lineHeight="50.18px">
          Public Presale
        </Text>
        <Text
          fontSize="22px"
          lineHeight="34.5pxpx"
          margin="15px 0 0 0"
          width="100%"
          maxWidth="750px"
        >
          e a holder with at least 100,000,000 MMP Tokens to participate in our
          closed beta testing!
        </Text>
      </StyledItem>
    </ItemView>
  );
};
