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
  background-position: top, bottom, left;
  background-repeat: no-repeat, no-repeat, no-repeat;
`;

const RoadmapDiv1 = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 200px;
  }
  & > *:last-child {
    margin-bottom: 100px;
  }
  display: flex;
  flex-direction: column;
  margin: 2%;
`;

const RoadmapDiv2 = styled.div`
  & > *:not(:first-child) {
    margin-top: 200px;
  }
  display: flex;
  flex-direction: column;
  margin: 2%;
`;

const Roadmap = () => {
  return (
    <Col id="roadmap">
      <RoadmapDiv>
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
        <img src={bar} alt="bar" width="80px" />
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
      </RoadmapDiv>
    </Col>
  );
};
export default Roadmap;
