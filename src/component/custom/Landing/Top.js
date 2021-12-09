import React, { useState, useEffect } from "react";
// import getWeb3 from "../../../getWeb3";
import { Text } from "../../common/Text";
import logo from "../../../assets/MetaMultiplayerLogo.png";
import gtaCha from "../../../assets/gta-cha.png";
import rlight from "../../../assets/rlight.png";
import weichle from "../../../assets/weichle.png";
import grand from "../../../assets/grand.png";

import { Row } from "../../common/Layout";
import { FaBars } from "react-icons/fa";
import { Button } from "../../../component/common/Button";
import Particles from "react-particles-js";
import particlesConfig from "../../../config/particlesConfig";
import Sidebar from "./Sidebar";
import { Navbardata } from "../../../constant";
import {
  LogoIMG,
  NavbarBack,
  NavbarView,
  RowLayout,
  MenuLogo,
  BarView,
  LinkLayout,
  LinkItem,
  PageStyle,
  SnowView,
  HeaderText,
  WhiteButton,
  HeaderIcon,
  GrandIcon,
  RockIcon,
  GtaImg,
} from "../../../style/top";

const RenderItem = ({ selected, name, onSelected }) => {
  return (
    <LinkItem
      sel={
        selected.toString().toLowerCase() === name.toString().toLowerCase()
          ? true
          : false
      }
      href={`#${name.toString().toLowerCase()}`}
      onClick={() => {
        onSelected(`${name.toString().toLowerCase()}`);
      }}
    >
      <Text
        color="#fffff"
        fontWeight="400"
        fontFamily="Gilroy-Medium !important"
      >
        {name}
      </Text>
    </LinkItem>
  );
};
const Top = () => {
  const [selected, setSelected] = useState("home");
  const [menushow, setMenushow] = useState(false);
  // const [userAccount, setUserAccount] = useState();
  const menustate = localStorage.getItem("rightmenu");

  useEffect(() => {
    setMenushow(localStorage.getItem("rightmenu") === "on" ? true : false);
  }, [menustate]);

  const MenuShow = () => {
    if (menushow) {
      localStorage.setItem("rightmenu", "off");
    } else {
      localStorage.setItem("rightmenu", "on");
    }
    setMenushow((prev) => !prev);
  };

  return (
    <PageStyle id="home">
      <SnowView>
        <Particles height="100%" width="100%" params={particlesConfig} />
      </SnowView>
      <NavbarBack>
        <Sidebar />
        <NavbarView>
          <RowLayout>
            <LogoIMG src={logo} />
            <Text fontFamily={`"Aladin", sans-serif`}>Meta Multiplayer</Text>
          </RowLayout>
          <BarView>
            <FaBars size="30" color="white" onClick={MenuShow} />
          </BarView>
          <LinkLayout>
            <MenuLogo>
              <LogoIMG src={logo} />
              <Text fontFamily={`"Aladin", sans-serif`}>Meta Multiplayer</Text>
            </MenuLogo>
            {Navbardata.map((item, key) => {
              return (
                <RenderItem
                  key={key + 1}
                  selected={selected}
                  name={item}
                  onSelected={setSelected}
                />
              );
            })}

            <Button>
              <Text>
                {/* {userAccount
                  ? `${userAccount.slice(0, 6)}...${userAccount.slice(
                      userAccount.length - 4,
                      userAccount.length
                    )}`
                  : "Conecct wallet"} */}
                Connect wallet
              </Text>
            </Button>
          </LinkLayout>
        </NavbarView>
      </NavbarBack>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          maxWidth: "1200px",
          margin: "auto",
          marginTop: "100px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <HeaderText>
            Metamultiplayer - First Real Metaverse Experience!
          </HeaderText>
          <Text
            margin="40px 0 50px 0"
            lineHeight="39px"
            color="rgba(255, 255, 255, 0.6)"
            width="90%"
            className="header_sub"
            fontFamily="Gilroy-Medium !important"
          >
            Play on our GTA 5 roleplay server, Collect & Trade NFT'S, earn MMP
            tokens while playing on our server. Join today!
          </Text>
          <Row
            mgap="0 20px 0 0"
            width="100%"
            justify="flex-start"
            className="header_sub"
          >
            <a
              href="https://metamultiplayer.io/whitepaper.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <WhiteButton>
                <Text fontFamily="Gilroy-Medium !important">whitepaper</Text>
              </WhiteButton>
            </a>
          </Row>
          <Row
            mgap="0 20px 0 0"
            margin="100px 0 50px 0"
            width="100%"
            justify="flex-start"
            className="header_sub"
          >
            <HeaderIcon>
              <img src={weichle} alt="weichle" width="50px" />
            </HeaderIcon>
            <GrandIcon>
              <img src={grand} alt="grand" width="50px" />
            </GrandIcon>
            <RockIcon>
              <img src={rlight} alt="rlight" width="100%" />
            </RockIcon>
          </Row>
        </div>
        <GtaImg src={gtaCha} />
      </div>
    </PageStyle>
  );
};
export default Top;
