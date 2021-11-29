import React, { useState, useEffect } from "react";
import getWeb3 from "../../../getWeb3";
import { Text } from "../../common/Text";
import logo from "../../../assets/MetaMultiplayerLogo.png";
import gtaCha from "../../../assets/gta-cha.png";
import rlight from "../../../assets/rlight.png";
import weichle from "../../../assets/weichle.png";
import grand from "../../../assets/grand.png";
import styled, { keyframes } from "styled-components";
import { Row } from "../../common/Layout";
import { FaBars } from "react-icons/fa";
import { Button } from "../../../component/common/Button";
import Particles from "react-particles-js";
import particlesConfig from "../../../config/particlesConfig";
import Sidebar from "./Sidebar";
const LogoIMG = styled.img`
  margin-right: 0.7rem !important;
  border-style: none;
  height: 45px;
`;
const NavbarBack = styled.div`
  display: flex;
  justify-content: center;

  top: 0;
  width: 100%;
  padding: 0 2rem 1rem 1rem;
  z-index: 10;
`;

const NavbarView = styled.div`
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0.65) 0%,
    rgba(0, 0, 0, 0) 100%
  );

  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.3125rem 0 0.3125rem 0;
`;
const RowLayout = styled.div`
  display: none;
  @media only screen and (max-width: 850px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
const MenuLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

const BarView = styled.div`
  @media only screen and (max-width: 850px) {
    display: block;
    position: fixed;
    right: 10px;
  }
  cursor: pointer;
  display: none;
  svg: {
    cursor: pointer;
  }
`;
const LinkLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 2rem;
  }
  @media only screen and (max-width: 850px) {
    display: none;
  }
`;
const LinkItem = styled.a`
  position: relative;
  cursor: pointer;
  text-decoration: none;
  color: white;
  // : ;
  span {
    transition: all 0.4s ease-in-out;
    opacity: 0.5;
    ::after {
      margin-top: 5px;
      transition: all 0.4s ease-in-out;
      opacity: 0.5;
      content: "";
      display: block;
      height: 2px;
      width: 100%;
      background: #fff;
      transform: scaleX(0);
    }
  }
  ${(props) =>
    props.sel
      ? `  span {
    opacity: 1;
    ::after {
      opacity: 1;
      transform: scaleX(1);
    }
  }`
      : ""}
  :hover {
    span {
      opacity: 1;
      ::after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`;
const IntroButton = styled.button`
  z-index: 1;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 4px 97px rgba(255, 86, 246, 0.51);
  backdrop-filter: blur(192px);
  /* padding: 10px 30px; */
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 13px;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
  :hover {
    box-shadow: 0px 4px 97px rgba(255, 86, 246, 0.81);
  }
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
const WhiteButton = styled.button`
  z-index: 1;
  /* padding: 15px 30px; */
  background: linear-gradient(
    92.23deg,
    #ff56f6 21.43%,
    #b936ee 50.63%,
    #3bace2 100%,
    #406aff 117.04%
  );
  outline: none;
  border: none;
  cursor: pointer;
  box-shadow: 0px 4px 97px rgba(255, 86, 246, 0.51);
  backdrop-filter: blur(192px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 13px;
  :hover {
    box-shadow: 0px 4px 97px rgba(255, 86, 246, 0.81);
  }
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
      <Text color="#fffff" fontWeight="400">
        {name}
      </Text>
    </LinkItem>
  );
};
const Navbardata = [
  "Home",
  "Presale",
  "Tokenomics",
  "Roadmap",
  "NFT",
  "Supply",
  "Make money",
  "FAQ",
];
const transitionTime = 700;
const phraseAnim = keyframes`
0%{
    opacity:0;
    transform:translateX(999px)
}
100%{
    opacity:1;
    transform:translateX(0)
}
`;

const HeaderText = styled.span`
  font-family: Orbitron;
  font-weight: 700;
  font-size: 40px;
  color: white;
  margin: 0 0 0 0;
  animation: ${phraseAnim} ${transitionTime}ms linear 300ms forwards;
  @media only screen and (max-width: 750px) {
    font-size: 25px;
    line-height: 50px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 23px;
    line-height: 50px;
    text-align: center;
  }
`;
const GtaImg = styled.img`
  width: 600px;
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

const PageStyle = styled.div`
  width: 100%;
  padding: 0 50px;
  position: relative;
  background-color: rgb(29, 10, 51);
  z-index: 10;
  @media only screen and (max-width: 400px) {
    padding: 0 10px;
  }
`;
const SnowView = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  div {
    width: 100%;
    height: 100%;
  }
`;
const HeaderIcon = styled.div`
  background-color: white;
  padding: 5px;
  border-radius: 20px;
  width: 60px;
  height: 60px;
  cursor: pointer;
  z-index: 1;
  box-shadow: 0px 4px 97px rgba(255, 15, 246, 0.51);
  transition: 0.6s cubic-bezier(0.33, 1, 0.68, 1);
  :hover {
    opacity: 0.9;
    transform: scale(1.2);
    box-shadow: 0px 4px 97px rgba(255, 165, 246, 0.51);
  }
`;

const GrandIcon = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  padding: 5px;
  border-radius: 20px;
  width: 60px;
  height: 60px;
  cursor: pointer;
  z-index: 1;
  box-shadow: 0px 4px 97px rgba(255, 15, 246, 0.51);
  transition: 0.6s cubic-bezier(0.33, 1, 0.68, 1);
  :hover {
    opacity: 0.9;
    transform: scale(1.2);
    box-shadow: 0px 4px 97px rgba(255, 165, 246, 0.51);
  }
`;
const RockIcon = styled.div`
  background-color: yellow;
  border-radius: 20px;
  width: 60px;
  height: 60px;
  cursor: pointer;
  z-index: 1;
  box-shadow: 0px 4px 97px rgba(255, 15, 246, 0.51);
  transition: 0.6s cubic-bezier(0.33, 1, 0.68, 1);
  :hover {
    opacity: 0.9;
    transform: scale(1.2);
    box-shadow: 0px 4px 97px rgba(255, 165, 246, 0.51);
  }
`;
const Top = () => {
  const [selected, setSelected] = useState("home");
  const [menushow, setMenushow] = useState(false);
  const [userAccount, setUserAccount] = useState();
  const menustate = localStorage.getItem("rightmenu");
  useEffect(() => {
    ConnectWallet();
  }, []);
  useEffect(() => {
    setMenushow(localStorage.getItem("rightmenu") === "on" ? true : false);
  }, [menustate]);
  const ConnectWallet = async () => {
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();
    setUserAccount(accounts[0]);
  };
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

            <Button
              onClick={() => {
                ConnectWallet();
              }}
            >
              <Text>
                {userAccount
                  ? `${userAccount.slice(0, 6)}...${userAccount.slice(
                      userAccount.length - 4,
                      userAccount.length
                    )}`
                  : "Conecct wallet"}
              </Text>
            </Button>
            {/* )} */}
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
            Metamultiplayer - First <br />
            Real Metaverse Experience!
          </HeaderText>
          <Text
            margin="40px 0 50px 0"
            lineHeight="39px"
            color="rgba(255, 255, 255, 0.6)"
            width="90%"
          >
            Play on our GTA 5 roleplay server, Collect & Trade NFT'S, <br />{" "}
            earn MMP tokens while playing on our server. Join today!
          </Text>
          <Row mgap="0 20px 0 0">
            <WhiteButton>
              <Text>whitepaper</Text>
            </WhiteButton>
            <IntroButton>
              <Text>Introduction</Text>
            </IntroButton>
          </Row>
          <Row mgap="0 20px 0 0" margin="100px 0 50px 0">
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
