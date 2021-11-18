import React from "react";
// @import component
import { Text } from "../component/Text";
import { Row, Col } from "../component/Layout";
import { SiInstagram, SiTwitter, SiDiscord } from "react-icons/si";
// @import assets
import logo from "../assets/logo.png";
import footIMG from "../assets/nftcalendar.png";
// @import style
import {
  StyledFooter,
  FooterView,
  LogoFootIMG,
  IconView,
  NftView,
  NftIMG,
} from "./style";
const Footer = () => {
  return (
    <StyledFooter>
      <FooterView>
        <NftView href="https://wolfclub86.com/">
          <LogoFootIMG src={logo} />
        </NftView>
        <Col align="center">
          <IconView>
            <NftView href="https://instagram.com/wolfclub86">
              <SiInstagram size={24} />
            </NftView>
            <NftView href="http://discord.gg/czYzNAVCm4">
              <SiDiscord size={24} />
            </NftView>
            <NftView href="https://twitter.com/WolfClub86">
              <SiTwitter size={24} />
            </NftView>
          </IconView>
          <Row>
            <Text>As Seen On:</Text>
            <NftView href="http://nftcalendar.io">
              <NftIMG src={footIMG} />
            </NftView>
          </Row>
        </Col>
        <Text>Contact@wolfclub86.com</Text>
      </FooterView>
    </StyledFooter>
  );
};
export default Footer;
