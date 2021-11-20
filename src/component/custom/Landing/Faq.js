import React from "react";
import { Text } from "../../common/Text";
import { Col, Row } from "../../common/Layout";
import faqImg from "../../../assets/car-slider.png";
import logoImg from "../../../assets/MetaMultiplayerLogo.png";
import gtavImg from "../../../assets/gtav_img.png";
import link from "../../../assets/link.png";
import juli from "../../../assets/juli.png";
import { Collapse } from "../../../component/common/Collapse";
import { FaTwitter, FaYoutube, FaTelegramPlane } from "react-icons/fa";
import styled from "styled-components";
const data = [
  {
    title: "How can I participate in closed beta?",
    content:
      "You need to be a holder with at least 100,000,000 MMP Tokens to participate in our closed beta testing!",
  },
  {
    title: "How can I participate in open beta? ",
    content:
      "You need to be a holder with at least 100,000,000 MMP Tokens to participate in our closed beta testing!",
  },

  {
    title: "How can I collect & Trade NFTs?",
    content:
      "You need to be a holder with at least 100,000,000 MMP Tokens to participate in our closed beta testing!",
  },
  {
    title: "How can I earn MMP Tokens?",
    content:
      "You need to be a holder with at least 100,000,000 MMP Tokens to participate in our closed beta testing!",
  },
];
const StyledFooter = styled.div`
  background: ${`url(${gtavImg})`};
  margin: 200px 0 0 0;
  width: 100%;
`;
const FooterContainer = styled.div`
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const FooterBody = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 50px;
  align-items: flex-end;
  position: relative;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const Faq = () => {
  return (
    <Col id="faq" backgroundColor="rgb(30, 23, 50)">
      <Col align="center">
        <Text
          fontFamily="Orbitron"
          fontWeight="700"
          fontSize="40px"
          align="center"
          margin="50px 0 0 0"
        >
          FAQ
        </Text>
        <Col
          background={`url(${faqImg})`}
          height="100%"
          width="90%"
          margin="40px 0 0 0"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          borderRadius="45px"
          maxWidth="1200px"
          mgap="0 0 30px 0"
        >
          {data.map((item, key) => {
            return (
              <Collapse
                title={item.title}
                content={item.content}
                key={key + 1}
              />
            );
          })}
        </Col>
      </Col>
      <StyledFooter>
        <FooterContainer>
          <FooterBody>
            <Row position="absolute" top="-10px" width="100%">
              <img
                src={juli}
                style={{
                  maxWidth: "300px",
                }}
                alt="juli"
              />
            </Row>
            <Col width="auto">
              <Text>Link</Text>
              <img src={link} alt="link" width="200px" />
              <Row mgap="0 40px 0 0" margin="30px 0 0 0" align="flex-start">
                <Col mgap="0 0 30px 0" width="auto">
                  <Text>F&Q</Text>
                  <Text>PreSale</Text>
                  <Text>Supply</Text>
                </Col>
                <Col mgap="0 0 30px 0" width="auto">
                  <Text>Make Money</Text>
                  <Text>Nft</Text>
                  <Text>Roadmap</Text>
                </Col>
                <Col mgap="0 0 30px 0" width="auto">
                  <Text>Tokenomics</Text>
                </Col>
              </Row>
            </Col>
            <Col width="auto" align="center">
              <img src={logoImg} width="120px" alt="logo" />
              <Row mgap="0 15px 0 0">
                <Row
                  backgroundColor="rgba(255, 255, 255, 0.3)"
                  borderRadius="15px"
                  padding="10px"
                >
                  <FaTwitter size="25" color="white" />
                </Row>
                <Row
                  backgroundColor="rgba(255, 255, 255, 0.3)"
                  borderRadius="15px"
                  padding="10px"
                >
                  <FaTelegramPlane size="25" color="white" />
                </Row>
                <Row
                  backgroundColor="rgba(255, 255, 255, 0.3)"
                  borderRadius="15px"
                  padding="10px"
                >
                  <FaYoutube size="25" color="white" />
                </Row>
              </Row>
            </Col>
          </FooterBody>
        </FooterContainer>
      </StyledFooter>
    </Col>
  );
};
export default Faq;
