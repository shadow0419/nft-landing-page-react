import React from "react";
import styled from "styled-components";
import { Col } from "../../common/Layout";
import { Text } from "../../common/Text";
import { TokenItem, TokenItems, TokenItemImg } from "../../../style/tokenomics";

import token_back from "../../../assets/token_back.png";
import mmp from "../../../assets/mmp.png";
import receipt from "../../../assets/receipt.png";
import buyback from "../../../assets/buyback.png";
import cardPos from "../../../assets/card-pos.png";
import token from "../../../assets/nft.jpg";
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
                    <Text fontFamily="Gilroy-Medium !important">
                      MMP Rewards
                    </Text>
                    <Text fontFamily="Gilroy-Medium !important">5% </Text>
                  </Col>
                </TokenItem>
                <TokenItem>
                  <TokenItemImg src={receipt} />
                  <Col>
                    <Text fontFamily="Gilroy-Medium !important">
                      Liquidity Tax
                    </Text>
                    <Text fontFamily="Gilroy-Medium !important">2%</Text>
                  </Col>
                </TokenItem>
                <TokenItem>
                  <TokenItemImg src={buyback} />
                  <Col>
                    <Text fontFamily="Gilroy-Medium !important">
                      BuybackTax
                    </Text>
                    <Text fontFamily="Gilroy-Medium !important">3%</Text>
                  </Col>
                </TokenItem>
                <TokenItem>
                  <TokenItemImg src={cardPos} />
                  <Col>
                    <Text fontFamily="Gilroy-Medium !important">Sell Tax</Text>
                    <Text fontFamily="Gilroy-Medium !important">0%</Text>
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
