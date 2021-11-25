import React from "react";
import styled from "styled-components";
import token_back from "../../../assets/token_back.png";
import mmp from "../../../assets/mmp.png";
import receipt from "../../../assets/receipt.png";
import buyback from "../../../assets/buyback.png";
import cardPos from "../../../assets/card-pos.png";
import token from "../../../assets/nft.jpg";
// import token from "../../../assets/token.png";
import { Col } from "../../common/Layout";
import { Text } from "../../common/Text";

const TokenomicsDiv = styled.div`
  position: relative;
  background-image: url(${token});
  background-color: rgb(28, 20, 43);
  backdrop-filter: blur(10px);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  margin: auto;
  z-index: 0;
`;

// const TokenomicsImg = styled.img`
//   position: absolute;
//   opacity: 0.3;
//   height: 100%;
//   right: -20%;

//   @media only screen and (max-width: 450px) {
//   }
// `;

const TokenomicsText = styled.div`
  font-family: Orbitron;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 144px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 130px;
`;

// const RoadmapText = styled.div`
//   font-family: Orbitron;
//   font-style: normal;
//   font-weight: 700;
//   font-size: 40px;
//   line-height: 144px;
//   color: #ffffff;
//   text-align: center;
//   margin-top: 137px;
// `;
const StyledToken = styled.div`
  background-image: url(${token_back});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50px;
  width: 90%;
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
`;

const TokenItemImg = styled.img``;

const Tokenomics = () => {
  return (
    <Col id="tokenomics" background={`url(${token})`}>
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
    </Col>
  );
};
export default Tokenomics;
