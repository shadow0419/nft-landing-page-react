import React from "react";
import { Text } from "../../common/Text";
import { SupplyItem } from "../../common/SupplyItem";
import jagvar from "../../../assets/jagvar.png";
import clothe from "../../../assets/clothe.png";
import house from "../../../assets/house.png";
import bogati from "../../../assets/bogati.png";
import bmw from "../../../assets/bmw.png";
import { Col, Row } from "../../common/Layout";
import buyeffect from "../../../assets/buyeffect.png";
import styled from "styled-components";
import { CountItem } from "../../common/CountItem";
const colordata = [
  {
    percent: 5,
    gfcolor: "#FF8383",
    glcolor: "#FF3333",
    describe: "Ingame Events & Airdrops",
  },
  {
    percent: 5,
    gfcolor: "#FF9D2A",
    glcolor: "#FFD707",
    describe: "Marketing",
  },
  {
    percent: 5,
    gfcolor: "#FF42E1",
    glcolor: "#9F3FFF",
    describe: "Charity Wallet (Community members choose the organisation)",
  },
  {
    percent: 10,
    gfcolor: "#6148FF",
    glcolor: "#3014DE",
    describe: "Public Sale",
  },
  {
    percent: 10,
    gfcolor: "#7AEE68",
    glcolor: "#36BA20",
    describe: "Game Development",
  },
  {
    percent: 10,
    gfcolor: "#68EEC6",
    glcolor: "#20BA8C",
    describe: "Staking Rewards",
  },
  {
    percent: 10,
    gfcolor: "#EE7868",
    glcolor: "#BA2020",
    describe: "Periodic Burns",
  },
  {
    percent: 15,
    gfcolor: "#9E00FF",
    glcolor: "#5B20BA",
    describe: "Ecosystem ($MMP Foundation)",
  },
  {
    percent: 30,
    gfcolor: "#FF00A8",
    glcolor: "#BA2073 ",
    describe: "Pancakeswap Listing",
  },
];
const BuyButton = styled.button`
  background: url(${buyeffect});
  background-color: #16beaa;
  border-radius: 40px;
  justify-content: center;
  max-width: 300px;
  margin: 43px 0 0 0;
  padding: 10px 0;
  display: flex;
  width: 60%;
  outline: none;
  cursor: pointer;
  border: none;
`;
const TokenSupply = styled.div`
  display: flex;
  margin: 40px 0 0 0;
  width: 100%;
  padding: 0 0 0 20px;
  & > * {
    margin-right: -30px;
  }
  & > :first-child {
    border-bottom-left-radius: 50px;
    border-top-left-radius: 50px;
  }
`;
const EcoDirect = styled.div`
  background: ${(props) =>
    `linear-gradient(95.03deg, ${props.gfcolor} 0%, ${props.glcolor} 103.72%)`};
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
  width: 35px;
  height: 35px;
`;
const Supply = () => {
  return (
    <Col align="center" id="supply">
      <Row mgap="0 30px 0 0" margin="50px 0 0 0" align="flex-start">
        <SupplyItem img={jagvar} />
        <SupplyItem img={clothe} />
        <SupplyItem img={house} />
        <SupplyItem img={bogati} />
        <SupplyItem img={bmw} />
      </Row>
      <BuyButton>
        <Text fontSize="24px" align="center">
          Buy
        </Text>
      </BuyButton>
      <Text
        fontFamily="Orbitron"
        fontWeight="700"
        fontSize="40px"
        align="center"
        margin="30px 0 0 0"
      >
        SUPPLY
      </Text>
      <TokenSupply>
        {colordata.map((item, key) => {
          return <CountItem item={item} key={key + 1} index={key + 1} />;
        })}
      </TokenSupply>
      <Row
        wrap="wrap"
        mgap="0 20px 20px 0"
        justify="flex-start"
        margin="30px 30px 0 30px"
        borderRadius="45px"
        backgroundColor="rgba(255,255,255,0.3)"
        backdropFilter="blur(10px)"
        padding="20px"
      >
        {colordata.map((item, key) => {
          return (
            <Row key={key + 1}>
              <EcoDirect gfcolor={item.gfcolor} glcolor={item.glcolor} />
              <Text fontSize="20px" margin="0 0 0 15px">
                {item.describe}
              </Text>
            </Row>
          );
        })}
      </Row>
      <Text fontSize="24px" align="center" margin="30px 0 110px 0">
        Total supply: 1,000,000,000,000
      </Text>
    </Col>
  );
};
export default Supply;
