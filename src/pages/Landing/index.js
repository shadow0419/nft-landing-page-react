import React from "react";

import Top from "../../component/custom/Landing/Top.js";
import Presale from "../../component/custom/Landing/Presale.js";
import Tokenomics from "../../component/custom/Landing/Tokenomics.js";
import Roadmap from "../../component/custom/Landing/Roadmap.js";
import Nft from "../../component/custom/Landing/Nft.js";
import Supply from "../../component/custom/Landing/Supply.js";
import Money from "../../component/custom/Landing/Money.js";
import Faq from "../../component/custom/Landing/Faq.js";

import { Col } from "../../component/common/Layout/index.js";
// @import style

import { StyledLayout } from "./style";

const Landing = () => {
  return (
    <StyledLayout>
      <Col>
        <Top />
        <Presale />
        <Tokenomics />
        <Roadmap />
        <Nft />
        <Supply />
        <Money />
        <Faq />
      </Col>
    </StyledLayout>
  );
};
export default Landing;
