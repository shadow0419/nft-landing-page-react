import React from "react";
import styled from "styled-components";
import { Text } from "../../common/Text";
import { Col, Row } from "../../common/Layout";
import faqImg from "../../../assets/car-slider.png";
import logoImg from "../../../assets/MetaMultiplayerLogo.png";
import gtavImg from "../../../assets/gtav_img.png";
import link from "../../../assets/link.png";
import juli from "../../../assets/juli.png";
import { Collapse } from "../../../component/common/Collapse";
import { FaTwitter, FaYoutube, FaTelegramPlane } from "react-icons/fa";
//////////////////////////////////////////////
import au21 from "../../../assets/invester/au21.png";
import bbs from "../../../assets/invester/bbs.png";
import bca from "../../../assets/invester/bca.png";
import gen from "../../../assets/invester/gen.png";
import magu from "../../../assets/invester/magu.png";
import bluezilla from "../../../assets/invester/bluezilla.png";
import dutch from "../../../assets/invester/dutch.png";
import everse from "../../../assets/invester/everse.png";
import ferum from "../../../assets/invester/ferum.png";
import gem from "../../../assets/invester/gem.png";
import oddiyana from "../../../assets/invester/oddiyana.png";
import qig from "../../../assets/invester/qig.png";
import r930 from "../../../assets/invester/r930.png";
import shark from "../../../assets/invester/shark.png";
import synaps from "../../../assets/invester/synaps.png";
import vespertine from "../../../assets/invester/vespertine.png";
import wealthunion from "../../../assets/invester/wealthunion.png";
import x21 from "../../../assets/invester/x21.png";
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
  margin: 100px 0 0 0;
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

const Investors = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const InvestImg = styled.img`
  margin: 1.5rem;
`;
const InvestLink = styled.a`
  display: contents;
  cursor: pointer;
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
      <Col align="center">
        <Investors>
          <Text
            fontSize="2.5rem"
            fontFamily="Philosopher"
            align="center"
            fontWeight="700"
            margin="20px 0 0 0"
          >
            Our Investors
          </Text>
          <Row wrap="wrap" margin="10px 0 0 0" maxWidth="670px">
            <InvestLink href="https://bluezilla.vc">
              <InvestImg src={bluezilla} width="150px" height="100px" />
            </InvestLink>
            <InvestLink href="https://genblock.capital/">
              <InvestImg src={gen} width="300px" height="70px" />
            </InvestLink>
            <InvestLink href="https://magnusdigitalassets.com/">
              <InvestImg src={magu} width="150px" height="100px" />
            </InvestLink>
            <InvestLink href="https://wealthunion.io">
              <InvestImg src={wealthunion} width="300px" height="70px" />
            </InvestLink>
            <InvestLink href="https://synaps.io/">
              <InvestImg src={synaps} width="150px" height="60px" />
            </InvestLink>
            <InvestLink href="https://au21.capital">
              <InvestImg src={au21} width="100px" height="100px" />
            </InvestLink>
            <InvestLink href="https://oddiyana.ventures">
              <InvestImg src={oddiyana} width="100px" height="100px" />
            </InvestLink>
            <InvestLink href="https://moonwhale.ventures">
              <InvestImg src={shark} width="150px" height="100px" />
            </InvestLink>
            <InvestLink href="https://oiginvest.com">
              <InvestImg src={qig} width="150px" height="100px" />
            </InvestLink>
            <InvestLink href="https://dutchcryptoinvestors.com">
              <InvestImg src={dutch} width="150px" height="100px" />
            </InvestLink>
            <InvestLink href="https://www.vespertine.capital">
              <InvestImg src={vespertine} width="100px" height="100px" />
            </InvestLink>
            <InvestLink href="https://www.bbscapital.com">
              <InvestImg src={bbs} width="250px" height="100px" />
            </InvestLink>
            <InvestLink href="https://bcainvestments.com">
              <InvestImg src={bca} width="218px" height="100px" />
            </InvestLink>
            <InvestLink href="https://eversecapital.com/">
              <InvestImg src={everse} width="175px" height="100px" />
            </InvestLink>
            <InvestLink href="https://gemcapital.io/">
              <InvestImg src={gem} width="230px" height="100px" />
            </InvestLink>
            <InvestLink href="https://r-930capital.com/">
              <InvestImg src={r930} width="300px" height="100px" />
            </InvestLink>
            <InvestLink href="https://x21digital.com/">
              <InvestImg src={x21} width="100px" height="100px" />
            </InvestLink>
            <InvestLink href="https://x21digital.com/">
              <InvestImg src={ferum} width="300px" height="55px" />
            </InvestLink>
          </Row>
        </Investors>
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
              <Row mgap="0 15px 0 0" margin="30px 0 0 0">
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
