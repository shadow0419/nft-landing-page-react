import React from "react";
import { MapItem } from "../../../component/common/MapItem";
import { Col } from "../../common/Layout";
import styled from "styled-components";
import bar from "../../../assets/bar.svg";
import roadmap1 from "../../../assets/roadmap1.png";
import roadmap2 from "../../../assets/roadmap2.png";
import wave from "../../../assets/wave.png";

const RoadmapDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url(${roadmap1}), url(${roadmap2}), url(${wave});
  background-size: 100% 60%, 100% 40%, 50%, auto;
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
const CenterImg = styled.img`
  width: 60px;
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const Roadmap = () => {
  return (
    <Col id="roadmap">
      <RoadmapDiv>
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
          <CenterImg src={bar} />

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
      </RoadmapDiv>
    </Col>
  );
};
export default Roadmap;
