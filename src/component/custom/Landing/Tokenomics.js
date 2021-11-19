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

const TokenomicsDiv = styled.div`
  position: relative;
  background-color: rgb(28, 20, 43);
  background-image: url(${token});
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

const TokenItems = styled.div`
  background-image: url(${token_back});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50px;
  width: 90%;
  margin-bottom: 137px;
  margin-top: 52px;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const TokenItem = styled.div`
  display: flex;
  align-items: center;
  margin: 60px 60px;
`;

const TokenItemImg = styled.img`
  background-image: url(${(props) => props.src};);
  margin-right: 25px;
`;

const TokenItemText = styled.div`
  font-family: Gilroy-Medium;
  font-size: 25px;
  line-height: 156.8%;
  color: #ffffff;
`;

const TokenItemSplit = styled.div`
  background-image: url(${split});
  width: 1px;
  height: 150px;
`;

const Tokenomics = () => {
  return (
    <Col id="tokenomics">
      <TokenomicsDiv>
        <TokenomicsText>Tokenomics</TokenomicsText>
        <img
          src={car1}
          style={{ position: "absolute", top: -331, right: -100, zIndex: -1 }}
        />
        <TokenItems>
          <TokenItem>
            <TokenItemImg src={mmp} />
            <TokenItemText>
              MMP Rewards
              <tr />
              5%
            </TokenItemText>
          </TokenItem>
          <TokenItemSplit />
          <TokenItem>
            <TokenItemImg src={receipt} />
            <TokenItemText>
              Liquidity Tax
              <tr />
              2%
            </TokenItemText>
          </TokenItem>
          <TokenItemSplit />
          <TokenItem>
            <TokenItemImg src={buyback} />
            <TokenItemText>
              BuybackTax
              <tr />
              3%
            </TokenItemText>
          </TokenItem>
          <TokenItemSplit />
          <TokenItem>
            <TokenItemImg src={cardPos} />
            <TokenItemText>
              Sell Tax
              <tr />
              0%
            </TokenItemText>
          </TokenItem>
        </TokenItems>
        <img
          src={car2}
          style={{ position: "absolute", top: 250, left: 100, zIndex: -1 }}
        />
        <RoadmapText>Roadmap</RoadmapText>
      </TokenomicsDiv>
    </Col>
  );
};
export default Tokenomics;
