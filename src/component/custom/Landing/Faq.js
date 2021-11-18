import React from "react";
import { Text } from "../../common/Text";
import { Col, Row } from "../../common/Layout";
import faqImg from "../../../assets/car-slider.png";
import logoImg from "../../../assets/MetaMultiplayerLogo.png";
import gtavImg from "../../../assets/gtav_img.png";
import link from "../../../assets/link.png";
import juli from "../../../assets/juli.png";
import { Collapse } from "../../../component/common/Collapse";
const Faq = () => {
  return (
    <Col id="faq">
      <Col align="center">
        <Text
          fontFamily="Orbitron"
          fontWeight="700"
          fontSize="40px"
          align="center"
          margin="40px 0 0 0"
        >
          FAQ
        </Text>

        <Col
          background={`url(${faqImg})`}
          height="100%"
          width="100%"
          margin="40px 0 0 0"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          borderRadius="45px"
          // background="rgba(255, 255, 255, 0.3)"
          mgap="0 0 30px 0"
        >
          <Collapse />
          <Collapse />
          <Collapse />
          <Collapse />
        </Col>
      </Col>
      <Col
        background={`url(${gtavImg})`}
        margin="220px 0 0 0"
        position="relative"
      >
        <img src={juli} style={{ position: "absoulte", top: "-10px" }} />
      </Col>
    </Col>
  );
};
export default Faq;
