import React from "react";
import { MapItem } from "../../../component/common/MapItem";
import { Col } from "../../common/Layout";
import styled from "styled-components";
import bar from "../../../assets/dotline.png";
import roadmap from "../../../assets/roadmap.jpg";

import { Text } from "../../common/Text";
const RoadmapDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${roadmap});
  background-size: 100% 100%;
  background-position: top, bottom, left;
  background-repeat: no-repeat, no-repeat, no-repeat;
`;
const MapContainer = styled.div`
  display: flex;

  align-items: center;
  max-width: 1200px;
  margin: auto;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const RoadmapDiv1 = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 100px;
    @media only screen and (max-width: 800px) {
      margin-bottom: 60px;
    }
  }
  & > *:last-child {
    margin-bottom: 100px;
    @media only screen and (max-width: 800px) {
      margin-bottom: 60px;
    }
  }
  display: flex;
  flex-direction: column;
  margin: 2%;
`;

const RoadmapDiv2 = styled.div`
  & > *:not(:first-child) {
    margin-top: 100px;
  }
  display: flex;
  flex-direction: column;
  margin: 2%;
`;
const CenterImg = styled.div`
  width: 60px;
  @media only screen and (max-width: 800px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  :before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff00c8,
      #ff0000,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  :active {
    color: #000;
  }

  :active:after {
    background: transparent;
  }

  :hover:before {
    opacity: 1;
  }
`;
const DashLine = styled.img`
  height: 170px;
`;
const Roadmap = () => {
  return (
    <Col id="roadmap">
      <RoadmapDiv>
        <Text
          fontFamily="Orbitron"
          fontWeight="700"
          fontSize="40px"
          margin="50px 0 20px 0"
          align="center"
        >
          Roadmap
        </Text>
        <div>
          <MapContainer>
            <RoadmapDiv1>
              <MapItem
                date="2021 Q4"
                title="Public Presale"
                content="Anyone can participate"
              />
              <MapItem
                date="2021 Q4"
                title="NFT Marketplace"
                content="Launch of our NFT marketplace with ETH Bridge."
              />
              <MapItem
                date="2021 Q4"
                title="Staking Platform Launch"
                content="Anyone can participate"
              />
              <MapItem
                date="2021 Q1"
                title="MetaMultiplayer Server Launch "
                content="Stake any amount of MMP tokens on our staking platform, INSANE APY's incoming!"
              />
            </RoadmapDiv1>
            <CenterImg>
              <Col
                backgroundColor="rgba(255, 255, 255, 0.2)"
                borderRadius="15px"
                width="60px"
                height="60px"
                align="center"
                justify="center"
              >
                <Col
                  backgroundColor="white"
                  borderRadius="10px"
                  width="35px"
                  height="35px"
                />
              </Col>
              <DashLine src={bar} />
              <Col
                backgroundColor="rgba(255, 255, 255, 0.2)"
                borderRadius="15px"
                width="60px"
                height="60px"
                align="center"
                justify="center"
              >
                <Col
                  backgroundColor="white"
                  borderRadius="10px"
                  width="35px"
                  height="35px"
                />
              </Col>
              <DashLine src={bar} />
              <Col
                backgroundColor="rgba(255, 255, 255, 0.2)"
                borderRadius="15px"
                width="60px"
                height="60px"
                align="center"
                justify="center"
              >
                <Col
                  backgroundColor="white"
                  borderRadius="10px"
                  width="35px"
                  height="35px"
                />
              </Col>
              <DashLine src={bar} />
              <Col
                backgroundColor="rgba(255, 255, 255, 0.2)"
                borderRadius="15px"
                width="60px"
                height="60px"
                align="center"
                justify="center"
              >
                <Col
                  backgroundColor="white"
                  borderRadius="10px"
                  width="35px"
                  height="35px"
                />
              </Col>
              <DashLine src={bar} />

              <Col
                backgroundColor="rgba(255, 255, 255, 0.2)"
                borderRadius="15px"
                width="60px"
                height="60px"
                align="center"
                justify="center"
              >
                <Col
                  backgroundColor="white"
                  borderRadius="10px"
                  width="35px"
                  height="35px"
                />
              </Col>
              <DashLine src={bar} />
              <Col
                backgroundColor="rgba(255, 255, 255, 0.2)"
                borderRadius="15px"
                width="60px"
                height="60px"
                align="center"
                justify="center"
              >
                <Col
                  backgroundColor="white"
                  borderRadius="10px"
                  width="35px"
                  height="35px"
                />
              </Col>
            </CenterImg>

            <RoadmapDiv2>
              <MapItem
                date="2021 Q4"
                title="Pancakeswap Launch"
                content="Pancakeswap Launch - Along with Pancakeswap Listing, We will get listed on Coingecko & Coinmarketcap the same day."
              />
              <MapItem
                date="2021 Q1"
                title="Metamultiplayer Server Closed Beta Testing"
                content="e a holder with at least 100,000,000 MMP Tokens to participate in our closed beta testing!"
              />
              <MapItem
                date="2021 Q2"
                title="Tier 1"
                content="Central Exchange - More details soon..."
              />
            </RoadmapDiv2>
          </MapContainer>
        </div>
      </RoadmapDiv>
    </Col>
  );
};
export default Roadmap;
