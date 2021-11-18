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
      <Text fontWeight="700" fontSize="20px" align="center" margin="30px 0 0 0">
        Total supply: 1,000,000,000,000
      </Text>
    </Col>
  );
};
export default Supply;
