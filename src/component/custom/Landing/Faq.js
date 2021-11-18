import React from "react";
import { Text } from "../../common/Text";
import { Col } from "../../common/Layout";
import faqImg from "../../../assets/car-slider.png";
import { Collapse } from "../../../component/common/Collapse";
const Faq = () => {
  return (
    <Col padding="40px 50px 220px 50px">
      <Text
        fontFamily="Orbitron"
        fontWeight="700"
        fontSize="72px"
        align="center"
        margin="40px 0 0 0"
      >
        FAQ
      </Text>
      <Col
        backgroundImage={`url(${faqImg})`}
        background="rgba(255, 255, 255, 0.3)"
        mgap="0 0 30px 0"
      >
        <Collapse /> <Collapse /> <Collapse />
      </Col>
    </Col>
  );
};
export default Faq;
