import React from "react";
import { Text } from "../../common/Text";
import soliderGun from "../../../assets/solider-gun.png";
import NFT from "../../../assets/NFT.png";
import { Col } from "../../common/Layout";
import styled from "styled-components";
const StyledNFT = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  background-color: #1e1459;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  @media only screen and (max-width: 550px) {
    background-size: cover;
  }
`;
const NftView = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 50px;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
  @media only screen and (max-width: 425px) {
    flex-direction: column;
  }
`;
const SoldierImg = styled.div`
  background: url(${soliderGun});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 500px;
  height: 600px;
  @media only screen and (max-width: 1024px) {
    width: 450px;
    height: 550px;
  }
  @media only screen and (max-width: 850px) {
    width: 400px;
    height: 500px;
  }
  @media only screen and (max-width: 425px) {
    width: 300px;
    height: 400px;
  }
`;

const NFTImg = styled.div`
  background: url(${NFT});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 700px;
  transition: transform 0.2s;
  height: 600px;
  @media only screen and (max-width: 1024px) {
    width: 650px;
    height: 550px;
  }
  @media only screen and (max-width: 850px) {
    width: 600px;
    height: 500px;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
  @media only screen and (max-width: 425px) {
    display: block;
    width: 400px;
    height: 300px;
  }
  :hover {
    transform: scale(1.2);
  }
`;
const Description = styled.span`
  font-size: 22px;
  margin: 30px 0 0 50px;
  text-align: left;
  width: 60%;
  line-height: 60px;
  z-index: 2;
  font-family: "Gilroy-Medium" !important;
  color: white;
  @media only screen and (max-width: 1024px) {
    font-size: 20px;
    line-height: 50px;
  }
  @media only screen and (max-width: 850px) {
    font-size: 18px;
    line-height: 45px;
  }
  @media only screen and (max-width: 768px) {
    width: 80%;
    text-align: center;
    margin: auto;
  }
`;
const Nft = () => {
  return (
    <StyledNFT id="nft">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "1200px",
          marginTop: "100px",
          margin: "auto",
          position: "relative",
        }}
      >
        <NftView>
          <SoldierImg />
          <NFTImg />
        </NftView>
        <Text
          fontFamily="Orbitron"
          fontWeight="700"
          fontSize="40px"
          margin="50px 0 0 0"
        >
          NFT
        </Text>
        <Col margin="auto auto 50px auto">
          <Description>
            A new way to own, trade, and battle for unique digital items that
            have value in the real world. Collectible items in games have long
            been a driving force in their popularity, fostering engagement in
            the game. Desperate to buy a new house in Los Santos? Yearning to
            get a Despacito jet, an Angry Bird car or a legendary Apocalypto? No
            problem! Do you want to buy expensive houses, cars, weapons and
            clothes - collect and trade them as NFTs? This means you are in the
            right place! It’s not just roleplay, it’s also real economy
          </Description>
        </Col>
      </div>
    </StyledNFT>
  );
};
export default Nft;
