import React from "react";
import styled from "styled-components";
import token_back from "../../../assets/token_back.png";
import mmp from "../../../assets/mmp.png";
import receipt from "../../../assets/receipt.png";
import buyback from "../../../assets/buyback.png";
import cardPos from "../../../assets/card-pos.png";
import split from "../../../assets/split.png";
import token from "../../../assets/token.png";
import car1 from "../../../assets/car1.png";
import car2 from "../../../assets/car2.png";
import { Col } from "../../common/Layout";
import { Text } from "../../common/Text";

const TokenomicsDiv = styled.div`
  position: relative;

  background-color: rgb(28, 20, 43);
  background-image: url(${token});
  backdrop-filter: blur(10px);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  z-index: 0;
`;

const TokenomicsText = styled.div`
  font-family: Orbitron;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 144px;
  color: #ffffff;
  text-align: center;
  margin-top: 50px;
`;

const RoadmapText = styled.div`
  font-family: Orbitron;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 144px;
  color: #ffffff;
  text-align: center;
  margin-top: 137px;
`;
const StyledToken = styled.div`
  background-image: url(${token_back});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50px;
  width: 80%;
`;
const TokenItems = styled.div`
  display: grid;
  grid-template: repeat(1, 1fr) / repeat(4, 1fr);
  backdrop-filter: blur(10px);
  padding: 50px 0;
  border-radius: 50px;
  margin: auto;
  & > *:not(:first-child) {
    border-left: 1px solid #ffffff;
  }
  @media only screen and (max-width: 900px) {
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  }
  @media only screen and (max-width: 550px) {
    grid-template: repeat(4, 1fr) / repeat(1, 1fr);
  }
`;

const TokenItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 0 0 10%;
`;

const TokenItemImg = styled.img``;

const Tokenomics = () => {
  return (
    <Col id="tokenomics">
      <TokenomicsDiv>
        <TokenomicsText>Tokenomics</TokenomicsText>
        <img
          src={car1}
          style={{ position: "absolute", top: -110, right: 200, zIndex: -1 }}
          width="600px"
        />
        <img
          src={car2}
          style={{ position: "absolute", bottom: 120, left: 150, zIndex: -1 }}
          width="450px"
        />
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

        <RoadmapText>Roadmap</RoadmapText>
      </TokenomicsDiv>
    </Col>
  );
};
export default Tokenomics;
