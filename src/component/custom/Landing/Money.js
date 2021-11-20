import React from "react";
import { Text } from "../../common/Text";
import moneyback from "../../../assets/moneyback.png";
import Vector from "../../../assets/Vector.png";
import passove from "../../../assets/passove.png";
import pink from "../../../assets/pink-effect.png";
import yellow from "../../../assets/man-effect2.png";
import coin from "../../../assets/coin.png";
import Frame from "../../../assets/Frame.png";
import supplyWave from "../../../assets/supply-wave.png";
import { Col, Row } from "../../common/Layout";
import styled from "styled-components";

const CoinImg = styled.img`
  width: 450px;
  position: "absolute";
  right: "5%";
  top: "5%";
  z-index: 2;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;
const Money = () => {
  return (
    <Col
      id="make money"
      background={`url(${moneyback})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Col
        align="center"
        position="relative"
        margin="20px 0 0 0"
        backgroundColor="#0E063D"
        opacity=".7"
      >
        <Text
          fontFamily="Orbitron"
          fontWeight="700"
          fontSize="40px"
          margin="50px 0 0 0"
        >
          MAKE MONEY
        </Text>
        <Text
          fontSize="22px"
          align="center"
          margin="25px 0 0 0"
          fontFamily="Gilroy-Light"
          lineHeight="200%"
        >
          BY PLAYING ON OUR SERVER
        </Text>
        <img
          src={pink}
          width="20%"
          style={{ position: "absolute", left: 0, top: "5%", zIndex: 1 }}
          alt="pink"
        />
        <img
          src={yellow}
          width="30%"
          style={{ position: "absolute", right: 0, zIndex: 1 }}
          alt="yellow"
        />

        <img
          src={supplyWave}
          width="80%"
          style={{ position: "absolute", left: 0, top: 0, zIndex: 2 }}
          alt="supplyWave"
        />
        <Row align="center" justify="center">
          <Col>
            <Row
              align="flex-start"
              justify="flex-start"
              margin="10px auto 20px 3%"
            >
              <img src={Vector} alt="frame1" />
              <Text
                fontSize="20px"
                align="center"
                margin="0 0 0 20px"
                maxWidth="600px"
                lineHeight="200%"
              >
                We will be holding raffles every week, with some prizes
                including MMP Tokens, houses, rank upgrades, and more.
              </Text>
            </Row>
            <Row
              align="flex-start"
              justify="flex-start"
              margin="10px auto 20px 3%"
            >
              <img src={Frame} alt="frame2" />
              <Text
                fontSize="20px"
                align="center"
                margin="0 0 0 20px"
                maxWidth="600px"
                lineHeight="200%"
              >
                Work and earn - as simple as it sounds! you can work as a Taxi
                driver, police officer, military service e.t.c
              </Text>
            </Row>
            <Row
              align="flex-start"
              justify="flex-start"
              margin="10px auto 100px 3%"
            >
              <img src={passove} alt="frame3" />
              <Text
                fontSize="20px"
                align="center"
                margin="0 0 0 20px"
                maxWidth="600px"
                lineHeight="200%"
              >
                Passive income - Own a business or business land and generate a
                new passive income source!
              </Text>
            </Row>
          </Col>
          <CoinImg src={coin} alt="coin" />
        </Row>
      </Col>
    </Col>
  );
};
export default Money;
