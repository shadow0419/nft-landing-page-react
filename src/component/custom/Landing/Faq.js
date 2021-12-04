import React from "react";
import styled from "styled-components";
import { Text } from "../../common/Text";
import { Col, Row } from "../../common/Layout";
import faqImg from "../../../assets/car-slider.png";
import logoImg from "../../../assets/MetaMultiplayerLogo.png";
import gtavImg from "../../../assets/Footer.svg";
import { Collapse } from "../../../component/common/Collapse";
import { FaTwitter, FaYoutube, FaTelegramPlane } from "react-icons/fa";

const data = [
  {
    title: "What is NFT Land?",
    content:
      "NFT Land is a NFT multi-million dollar marketplace and one of the premier gaming sites on blockchain.",
  },
  {
    title: "How does play to earn work?",
    content:
      "Play to earn GTA 5 roleplay server on BSC Network. The best way to describe this game is cryptocollectibles meets gta, bad company with no regen map. With a similar setting as Grand Thef Auto the user can buy and collect unique assets that are tradable on the blockchain or exchange. You can play the game or buy and sell.",
  },

  {
    title: "What is Metaverse?",
    content:
      "Enter The Metaverse: The next logical step in the evolution of gaming is here. We’re going to build a massive intercompatible (cross-platform) game world running on blockchains, the same tech that powers crypto-currencies like Bitcoin and Ethereum. Think GTA 5, but instead of a single centralized server, there are thousands of computers connected across the globe with blockchain technology providing super-fast transaction speeds (minutes as opposed to hours) as well as peer-to-peer discovery. It should be noted that our cars will be much cooler than Mario Kart!",
  },
  {
    title: "How to purchase Collectibles?",
    content:
      "$MMP token will be the IN-GAME currency. This can be used to purchase the virtual estate, cars, clothes.",
  },
  {
    title: "How can I participate in closed beta?",
    content:
      "You need to be a holder with at least 100,000,000 MMP Tokens to participate in our closed beta testing!",
  },
];
const StyledFooter = styled.div`
  background: ${`url(${gtavImg})`};
  background-size: cover;
  margin: 100px 0 0 0;
  width: 100%;
`;
const FooterContainer = styled.div`
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

    align-items: center;
    & > *:not(:last-child) {
      margin-bottom: 30px;
    }
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
            <Col width="auto">
              <Text cursor="pointer">Link</Text>
              <Row mgap="0 40px 0 0" margin="30px 0 0 0" align="flex-start">
                <Col mgap="0 0 30px 0" width="auto">
                  <Text cursor="pointer">F&Q</Text>
                  <Text cursor="pointer">PreSale</Text>
                  <Text cursor="pointer">Supply</Text>
                </Col>
                <Col mgap="0 0 30px 0" width="auto">
                  <Text cursor="pointer">Make Money</Text>
                  <Text cursor="pointer">Nft</Text>
                  <Text cursor="pointer">Roadmap</Text>
                </Col>
                <Col mgap="0 0 30px 0" width="auto">
                  <Text cursor="pointer">Tokenomics</Text>
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
                  <a href="https://twitter.com/MetaMultiplayer">
                    <FaTwitter size="25" color="white" />
                  </a>
                </Row>
                <Row
                  backgroundColor="rgba(0, 0, 0)"
                  borderRadius="15px"
                  padding="10px"
                  cursor="pointer"
                >
                  <a href="https://t.me/meta_multiplayer">
                    <FaTelegramPlane size="25" color="white" />
                  </a>
                </Row>
                <Row
                  backgroundColor="rgba(0, 0, 0)"
                  borderRadius="15px"
                  padding="10px"
                  cursor="pointer"
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
