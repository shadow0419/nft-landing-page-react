import React from "react";
import styled from "styled-components";
import { Text } from "../../common/Text";
import soliderGun from "../../../assets/solider-gun.png";
import NFT from "../../../assets/NFT.png";
import { Col } from "../../common/Layout";
const Nft = () => {
  return (
    <Col id="nft" position="relative" backgroundColor="#1E1459" align="center">
      <img
        src={NFT}
        alt="NFT"
        style={{ position: "absolute", right: "0" }}
        height="600px"
      />
      <Col>
        <img
          src={soliderGun}
          alt="solider"
          style={{
            position: "absolute",
            left: "0",
            backgroundColor: "#1E1459",
          }}
          height="640px"
        />
      </Col>
      <Text
        fontFamily="Orbitron"
        fontWeight="700"
        fontSize="40px"
        margin="61px 0 0 0"
      >
        NFT
      </Text>
      <Col>
        <Text
          fontSize="30px"
          margin="20px 0 0 51px"
          align="left"
          maxWidth="1021px"
          lineHeight="62.04px"
          zIndex="2"
        >
          A new way to own, trade, and battle for unique digital items that have
          value in the real world. Collectible items in games have long been a
          driving force in their popularity, fostering engagement in the game.
          Desperate to buy a new house in Los Santos? Yearning to get a
          Despacito jet, an Angry Bird car or a legendary Apocalypto? No
          problem! Do you want to buy expensive houses, cars, weapons and
          clothes - collect and trade them as NFTs? This means you are in the
          right place! It’s not just roleplay, it’s also real economy
        </Text>
      </Col>
    </Col>
  );
};
export default Nft;
