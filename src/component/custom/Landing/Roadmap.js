import React from "react";
import { MapItem } from "../../../component/common/MapItem";
import { Col } from "../../common/Layout";
import { Text } from "../../common/Text";
import styled from "styled-components";
import {
  MapContainer,
  RoadmapDiv1,
  RoadmapDiv2,
  CenterImg,
  DashLine,
} from "../../../style/roadmap";
import bar from "../../../assets/dotline.png";
import roadmap from "../../../assets/roadmap.jpg";

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
                date="2022 Q1"
                title="Public Presale"
                content="Anyone can participate"
              />
              <MapItem
                date="2022 Q1"
                title="NFT Marketplace"
                content="Launch of our NFT marketplace with ETH Bridge."
              />
              <MapItem
                date="2022 Q2"
                title="Staking Platform Launch"
                content="Stake any amount of MMP tokens on our staking platform, INSANE APY's incoming!"
              />
              <MapItem
                date="2022 Q4"
                title="MetaMultiplayer Server Launch"
                content="First MetaMultiplayer server will be launched to public!"
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
                date="2022 Q1"
                title="Pancakeswap Launch"
                content="Pancakeswap Launch - Along with Pancakeswap Listing, We will get listed on Coingecko & Coinmarketcap the same day."
              />
              <MapItem
                date="2022 Q1"
                title="Metamultiplayer Server Closed Beta Testing"
                content="Hold at least 100,000,000 MMP Tokens to participate in our closed beta testing!"
              />
              <MapItem
                date="2022 Q2"
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
