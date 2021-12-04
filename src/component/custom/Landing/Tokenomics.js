import React from "react";
import styled from "styled-components";
import token_back from "../../../assets/token_back.png";
import mmp from "../../../assets/mmp.png";
import receipt from "../../../assets/receipt.png";
import buyback from "../../../assets/buyback.png";
import cardPos from "../../../assets/card-pos.png";
import token from "../../../assets/nft.jpg";
import { Col } from "../../common/Layout";
import { Text } from "../../common/Text";
const StyledView = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: url(${token});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;
const TokenomicsDiv = styled.div`
  position: relative;
  background-image: url(${token});
  background-color: red;
  backdrop-filter: blur(10px);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  margin: auto;
  z-index: 2;
  @media only screen and (max-width: 900px) {
    background-size: cover;
  }
`;

const TokenomicsText = styled.div`
  font-family: Orbitron;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 144px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 130px;
  z-index: 2;
`;

const StyledToken = styled.div`
  background-image: url(${token_back});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50px;
  width: 90%;
  position: relative;
  &::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    background: rgba(0, 0, 200, 0.3);
    border-radius: 50px;
  }
`;
const TokenItems = styled.div`
  display: grid;
  grid-template: repeat(1, 1fr) / repeat(4, 1fr);
  padding: 50px 0;
  border-radius: 50px;
  margin: auto;
  & > *:not(:first-child) {
    border-left: 1px solid #ffffff;
  }
  @media only screen and (max-width: 900px) {
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    & > *:not(:first-child) {
      border: none;
    }
  }
  @media only screen and (max-width: 450px) {
    grid-template: repeat(4, 1fr) / repeat(1, 1fr);
  }
`;

const TokenItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 15% 0 20%;
  z-index: 2;
  div {
    background: #16beaa;
    border-radius: 10px;
    z-index: 0;
    padding: 5px 5px 5px 8px;
    position: relative;
    text-align: center;
    box-shadow: 0px 4px 97px rgba(22, 190, 170, 0.51);
    :hover {
      box-shadow: 0px 4px 97px rgba(255, 86, 246, 0.81);
    }
    :before {
      content: "";
      background: linear-gradient(
        45deg,
        #ff00c8,
        #ff0000,
        #00ffd5,
        #002bff,
        #7a00ff,
        #ff0000,
        #ff7300,
        #fffb00,
        #48ff00
      );
      position: absolute;
      top: -2px;
      left: -2px;
      background-size: 400%;
      z-index: -1;
      filter: blur(5px);
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      animation: glowing 20s linear infinite;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      border-radius: 10px;
    }

    :active {
      color: #000;
    }

    :active:after {
      background: transparent;
    }

    :hover:before {
      opacity: 1;
    }
  }
`;

const TokenItemImg = styled.img``;

const Tokenomics = () => {
  return (
    <StyledView id="tokenomics">
      <TokenomicsDiv>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "1200px",
            margin: "auto",
            marginBottom: "300px",
            position: "relative",
          }}
        >
          {/* <TokenomicsImg src={token} /> */}
          <TokenomicsText>Tokenomics</TokenomicsText>
          {/* <WhiteCar src={car1} /> */}
          {/* <BlackCar src={car2} /> */}
          <Col align="center">
            <StyledToken>
              <TokenItems>
                <TokenItem>
                  <TokenItemImg src={mmp} />
                  <Col>
                    <Text>MMP Rewards</Text>
                    <Text>5% </Text>
                  </Col>
                </TokenItem>
                <TokenItem>
                  <TokenItemImg src={receipt} />
                  <Col>
                    <Text>Liquidity Tax</Text>
                    <Text>2%</Text>
                  </Col>
                </TokenItem>
                <TokenItem>
                  <TokenItemImg src={buyback} />
                  <Col>
                    <Text>BuybackTax</Text>
                    <Text>3%</Text>
                  </Col>
                </TokenItem>
                <TokenItem>
                  <TokenItemImg src={cardPos} />
                  <Col>
                    <Text>Sell Tax</Text>
                    <Text>0%</Text>
                  </Col>
                </TokenItem>
              </TokenItems>
            </StyledToken>
          </Col>
          {/* <RoadmapText>Roadmap</RoadmapText> */}
        </div>
      </TokenomicsDiv>
    </StyledView>
  );
};
export default Tokenomics;
