import React from "react";
import { Text } from "../../common/Text";
import moneyback from "../../../assets/moneyback.png";
import Vector from "../../../assets/Vector.png";
import passove from "../../../assets/passove.png";
import Frame from "../../../assets/Frame.png";
import { Col, Row } from "../../common/Layout";
const Money = () => {
  return (
    <Col
      id="make money"
      background={`url(${moneyback})`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      width="100%"
      height="100%"
      align="center"
    >
      <Text
        fontFamily="Orbitron"
        fontWeight="700"
        fontSize="40px"
        margin="30px 0 0 0"
      >
        MAKE MONEY
      </Text>
      <Text
        fontSize="22px"
        align="center"
        margin="20px 0 0 0"
        fontFamily="
Gilroy-Light"
      >
        BY PLAYING ON OUR SERVER
      </Text>
      <Col margin="20px 0 0 0" mgap="0 0 15px 0">
        <Row align="flex-start" justify="flex-start">
          <img src={Vector} alt="frame" />
          <Text
            fontSize="20px"
            align="center"
            margin="0 0 0 20px"
            maxWidth="600px"
          >
            We will be holding raffles every week, with some prizes including
            MMP Tokens, houses, rank upgrades, and more.
          </Text>
        </Row>
        <Row align="flex-start" justify="flex-start">
          <img src={Frame} alt="frame" />
          <Text
            fontSize="20px"
            align="center"
            margin="0 0 0 20px"
            maxWidth="600px"
          >
            We will be holding raffles every week, with some prizes including
            MMP Tokens, houses, rank upgrades, and more.
          </Text>
        </Row>
        <Row align="flex-start" justify="flex-start">
          <img src={passove} alt="frame" />
          <Text
            fontSize="20px"
            align="center"
            margin="0 0 0 20px"
            maxWidth="600px"
          >
            We will be holding raffles every week, with some prizes including
            MMP Tokens, houses, rank upgrades, and more.
          </Text>
        </Row>
      </Col>
    </Col>
  );
};
export default Money;
