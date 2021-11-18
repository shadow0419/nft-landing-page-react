import React from "react";
import styled from "styled-components";
// @import component
import { Text } from "../../common/Text";
// @import assets
import presaleImg from "../../../assets/descomposition.png";
import metamaskImg from "../../../assets/metamask.png";
import bnbImg from "../../../assets/binance-coin-logo.png";
import MetaMultiplayerLogo from "../../../assets/MetaMultiplayerLogo.png";
import buyeffect from "../../../assets/buyeffect.png";
import { Row, Col } from "../../common/Layout";
const BuyInput = styled.div`
  max-width: 741px;
  background: #fefefe;
  border-radius: 40px;
  padding: 11px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
const StyledInput = styled.input`
  font-size: 24px;
  color: #9e9e9e;
  border: none;
  outline: none;
  width: 100%;
`;
const ConnectButton = styled.button`
  background: linear-gradient(90.76deg, #ff9d2a 3.46%, #ffd707 102.26%);
  border-radius: 40px;
  justify-content: center;
  max-width: 623px;
  margin: 60px 0 0 0;
  padding: 25px 0;
  display: flex;
  width: 100%;
  outline: none;
  cursor: pointer;
  border: none;
`;
const BuyButton = styled.button`
  background: url(${buyeffect});
  background-color: #16beaa;
  border-radius: 40px;
  justify-content: center;
  max-width: 623px;
  margin: 43px 0 0 0;
  padding: 25px 0;
  display: flex;
  width: 100%;
  outline: none;
  cursor: pointer;
  border: none;
`;
const Presale = () => {
  return (
    <Col
      background={`url(${presaleImg})`}
      width="100%"
      align="center"
      padding="36px 0 88px 0"
    >
      <Text
        fontFamily="Orbitron"
        fontWeight="700"
        fontSize="72px"
        align="center"
      >
        Presale
      </Text>
      <Text fontSize="30px" align="center" margin="10px 0 0 0" maxWidth="895px">
        Make sure to use Metamask/Trust Wallet to interact with this form. Min
        Contribution: 0.1 BNB Max Contribution : 5 BNB
      </Text>
      <ConnectButton>
        <Row
          width="55px"
          height="55px"
          backgroundColor="rgb(255, 255, 255,0.4)"
          borderRadius="100%"
        >
          <img src={metamaskImg} alt="metamask" />
        </Row>
        <Text fontSize="36px" align="center" margin="0 0 0 10px">
          Conecct to meta mask
        </Text>
      </ConnectButton>
      <Col
        padding="45px 0 33.3px 0"
        background="rgba(255, 255, 255, 0.1)"
        backdropFilter="blur(200px)"
        borderRadius="60px"
        maxWidth="895px"
        align="center"
        margin="32px 0 0 0"
      >
        <Col align="center" mgap="0 0 30px 0">
          <BuyInput>
            <StyledInput placeholder="BNB" />
            <Row
              width="83px"
              height="83px"
              backgroundColor="rgba(92, 92, 92, 0.1)"
              borderRadius="100%"
            >
              <img src={bnbImg} alt="bnb" />
            </Row>
          </BuyInput>
          <BuyInput>
            <StyledInput placeholder="MMP" />
            <Row
              width="83px"
              height="83px"
              backgroundColor="rgba(92, 92, 92, 0.1)"
              borderRadius="100%"
            >
              <img src={MetaMultiplayerLogo} alt="multi" />
            </Row>
          </BuyInput>
        </Col>
        <BuyButton>
          <Text fontSize="36px" align="center">
            Buy
          </Text>
        </BuyButton>
      </Col>
    </Col>
  );
};
export default Presale;
