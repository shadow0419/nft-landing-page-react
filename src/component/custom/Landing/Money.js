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
      <Text fontFamily="Orbitron" fontWeight="700" fontSize="40px">
        MAKE MONEY
      </Text>
      <Text fontSize="22px" align="center">
        BY PLAYING ON OUR SERVER
      </Text>
      <Col margin="10px 0 0 0" mgap="0 0 15px 0">
        <Row>
          <img src={Vector} alt="frame" />
          <Text fontSize="20px" align="center" margin="0 0 0 20px">
            We will be holding raffles every week, with some prizes including
            MMP Tokens, houses, rank upgrades, and more.
          </Text>
        </Row>
        <Row>
          <img src={Vector} alt="frame" />
          <Text fontSize="20px" align="center" margin="0 0 0 20px">
            We will be holding raffles every week, with some prizes including
            MMP Tokens, houses, rank upgrades, and more.
          </Text>
        </Row>
        <Row>
          <img src={Vector} alt="frame" />
          <Text fontSize="20px" align="center" margin="0 0 0 20px">
            We will be holding raffles every week, with some prizes including
            MMP Tokens, houses, rank upgrades, and more.
          </Text>
        </Row>
      </Col>
    </Col>
  );
};
export default Money;
