import React, { useState, useEffect } from "react";
import getWeb3 from "../../../getWeb3";
import { Text } from "../../common/Text";
import logo from "../../../assets/MetaMultiplayerLogo.png";
// import line from "../../../assets/line.png";
import gtaCha from "../../../assets/gta-cha.png";
import rlight from "../../../assets/rlight.png";
import weichle from "../../../assets/weichle.png";
import grand from "../../../assets/grand.png";
import styled, { keyframes } from "styled-components";
import { Col, Row } from "../../common/Layout";
import { FaBars } from "react-icons/fa";
import { Button } from "../../../component/common/Button";
import Particles from "react-particles-js";
import particlesConfig from "../../../config/particlesConfig";
const LogoIMG = styled.img`
  margin-right: 0.7rem !important;
  border-style: none;
  height: 45px;
`;
const NavbarBack = styled.div`
  display: flex;
  justify-content: center;
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0.65) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  top: 0;
  width: 100%;
  padding: 0 2rem 1rem 1rem;
`;

const NavbarView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.3125rem 0 0.3125rem 0;
  @media only screen and (max-width: 1200px) {
    max-width: 960px;
  }
  @media only screen and (max-width: 992px) {
    max-width: 720px;
  }
  @media only screen and (max-width: 768px) {
    max-width: 540px;
  }
`;
const RowLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const BarView = styled.div`
  @media only screen and (max-width: 768px) {
    display: block;
    position: fixed;
    right: 10px;
  }
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
  @media only screen and (max-width: 768px) {
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
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0px 4px 97px rgba(255, 86, 246, 0.51);
  backdrop-filter: blur(192px);
  padding: 10px 30px;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 13px;
`;
const WhiteButton = styled.button`
  padding: 10px 30px;
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
`;
const RenderItem = ({ selected, name, onSelected }) => {
  console.log(selected, name);
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
  "supply",
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
  }
`;
const GtaImg = styled.img`
  width: 600px;
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;
const Top = () => {
  const [selected, setSelected] = useState("home");
  const [userAccount, setUserAccount] = useState();
  useEffect(() => {
    ConnectWallet();
  }, []);
  const ConnectWallet = async () => {
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();
    setUserAccount(accounts[0]);
  };
  return (
    <Col
      id="home"
      padding="0 50px"
      style={{ position: "relative", backgroundColor: "rgb(29, 10, 51)" }}
    >
      <div style={{ position: "absolute" }}>
        <Particles height="100%" width="100%" params={particlesConfig} />
      </div>
      <NavbarBack>
        {/* <Sidebar /> */}
        <NavbarView>
          <RowLayout>
            <LogoIMG src={logo} />
            <Text fontFamily={`"Aladin", sans-serif`}>Meta Multiplayer</Text>
          </RowLayout>
          <BarView>
            <FaBars size="30" color="white" />
          </BarView>
          <LinkLayout>
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
          {/* <img
            src={line}
            width="60%"
            style={{ position: "absolute", left: "-5%" }}
            alt="line"
          /> */}

          <HeaderText HeaderText>
            Metamultiplayer - First <br />
            Real Metaverse Experience!
          </HeaderText>
          <Text
            margin="40px 0 50px 0"
            lineHeight="39px"
            color="rgba(255, 255, 255, 0.6)"
          >
            Play on our GTA 5 roleplay server, Collect & Trade NFT'S, <tr />{" "}
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
            <Row
              backgroundColor="white"
              padding="5px"
              borderRadius="20px"
              width="60px"
              height="60px"
            >
              <img src={weichle} alt="weichle" width="50px" />
            </Row>
            <Row
              backgroundColor="rgba(255, 255, 255, 0.3)"
              padding="5px"
              borderRadius="20px"
              width="60px"
              height="60px"
            >
              <img src={grand} alt="grand" width="50px" />
            </Row>
            <Row
              backgroundColor="yellow"
              borderRadius="20px"
              width="60px"
              height="60px"
            >
              <img src={rlight} alt="rlight" width="100%" />
            </Row>
          </Row>
        </div>
        <GtaImg src={gtaCha} />
      </div>
    </Col>
  );
};
export default Top;
