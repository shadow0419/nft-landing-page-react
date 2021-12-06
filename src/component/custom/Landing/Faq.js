import React from "react";
import styled from "styled-components";
import { Text } from "../../common/Text";
import { Col, Row } from "../../common/Layout";
import { Collapse } from "../../../component/common/Collapse";
import faqImg from "../../../assets/car-slider.png";
import logoImg from "../../../assets/MetaMultiplayerLogo.png";
import gtavImg from "../../../assets/Footer.svg";
import { FaTwitter, FaTelegramPlane } from "react-icons/fa";
import { FooterContainer, FooterBody, SocialLink } from "../../../style/faq";
import { faqData } from "../../../constant";

const StyledFooter = styled.div`
  background: ${`url(${gtavImg})`};
  background-size: cover;
  margin: 100px 0 0 0;
  width: 100%;
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
          {faqData.map((item, key) => {
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
            <Col width="auto">
              <Text cursor="pointer">Link</Text>
              <Row
                mgap="0 40px 30px 0"
                margin="30px 0 0 0"
                align="flex-start"
                className="footer_link"
                justify="flex-start"
                wrap="wrap"
              >
                <Row mgap="0 40px 0 0">
                  <Col mgap="0 0 30px 0" width="auto">
                    <SocialLink href="#faq">
                      <Text cursor="pointer">F&Q</Text>
                    </SocialLink>
                    <SocialLink href="#presale">
                      <Text cursor="pointer">PreSale</Text>
                    </SocialLink>
                    <SocialLink href="#supply">
                      <Text cursor="pointer">Supply</Text>
                    </SocialLink>
                  </Col>
                  <Col mgap="0 0 30px 0" width="auto">
                    <SocialLink href="#make money">
                      <Text cursor="pointer">Make Money</Text>
                    </SocialLink>
                    <SocialLink href="#nft">
                      <Text cursor="pointer">Nft</Text>
                    </SocialLink>
                    <SocialLink href="#roadmap">
                      <Text cursor="pointer">Roadmap</Text>
                    </SocialLink>
                  </Col>
                </Row>
                <Col mgap="0 0 30px 0" width="auto">
                  <SocialLink href="#tokenomics">
                    <Text cursor="pointer">Tokenomics</Text>
                  </SocialLink>
                </Col>
              </Row>
            </Col>
            <Col width="auto" align="center">
              <img src={logoImg} width="120px" alt="logo" />
              <Row mgap="0 15px 0 0" margin="30px 0 0 0">
                <Row
                  backgroundColor="rgba(0, 0, 0)"
                  borderRadius="15px"
                  padding="10px"
                  cursor="pointer"
                >
                  <SocialLink
                    href="https://twitter.com/MetaMultiplayer"
                    target="_blank"
                  >
                    <FaTwitter size="25" color="white" />
                  </SocialLink>
                </Row>
                <Row
                  backgroundColor="rgba(0, 0, 0)"
                  borderRadius="15px"
                  padding="10px"
                  cursor="pointer"
                >
                  <SocialLink
                    href="https://t.me/meta_multiplayer"
                    target="_blank"
                  >
                    <FaTelegramPlane size="25" color="white" />
                  </SocialLink>
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
