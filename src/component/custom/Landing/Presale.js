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
  max-width: 450px;
  background: #fefefe;
  border-radius: 40px;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  justify-content: space-between;
`;
const StyledInput = styled.input`
  font-size: 20px;
  color: #9e9e9e;
  border: none;
  outline: none;
  width: 80%;
`;
const ConnectButton = styled.button`
  background: linear-gradient(90.76deg, #ff9d2a 3.46%, #ffd707 102.26%);
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  margin: 30px 0 0 0;
  padding: 5px 0;
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
  max-width: 300px;
  margin: 43px 0 0 0;
  padding: 10px 0;
  display: flex;
  width: 60%;
  outline: none;
  cursor: pointer;
  border: none;
`;
const Presale = () => {
  return (
    <Col
      id="presale"
      background={`url(${presaleImg})`}
      height="100%"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      width="100%"
      align="center"
      padding="36px 0 88px 0"
    >
      <Text
        fontFamily="Orbitron"
        fontWeight="700"
        fontSize="40px"
        align="center"
      >
        Presale
      </Text>
      <Text fontSize="20px" align="center" margin="10px 0 0 0" maxWidth="895px">
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
        <Text fontSize="20px" align="center" margin="0 0 0 10px">
          Conecct to meta mask
        </Text>
      </ConnectButton>
      <Col
        padding="45px 0 33.3px 0"
        background="rgba(255, 255, 255, 0.1)"
        backdropFilter="blur(200px)"
        borderRadius="60px"
        maxWidth="600px"
        align="center"
        margin="32px 0 0 0"
      >
        <Col align="center" mgap="0 0 30px 0">
          <BuyInput>
            <StyledInput placeholder="BNB" />
            <Row
              width="40px"
              height="40px"
              backgroundColor="rgba(92, 92, 92, 0.1)"
              borderRadius="100%"
            >
              <img src={bnbImg} alt="bnb" width="30px" />
            </Row>
          </BuyInput>
          <BuyInput>
            <StyledInput placeholder="MMP" />
            <Row
              width="40px"
              height="40px"
              backgroundColor="rgba(92, 92, 92, 0.1)"
              borderRadius="100%"
            >
              <img src={MetaMultiplayerLogo} alt="multi" width="30px" />
            </Row>
          </BuyInput>
        </Col>
        <BuyButton>
          <Text fontSize="24px" align="center">
            Buy
          </Text>
        </BuyButton>
      </Col>
    </Col>
  );
};
export default Presale;
