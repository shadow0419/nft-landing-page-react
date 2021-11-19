import React, { useState, useEffect } from "react";
import getWeb3 from "../../../getWeb3";
import { Text } from "../../common/Text";
import logo from "../../../assets/MetaMultiplayerLogo.png";
import line from "../../../assets/line.png";
import gtaCha from "../../../assets/gta-cha.png";
import rlight from "../../../assets/rlight.png";
import weichle from "../../../assets/weichle.png";
import grand from "../../../assets/grand.png";
import styled from "styled-components";
import { Col, Row } from "../../common/Layout";
import { FaBars } from "react-icons/fa";
import { Button } from "../../common/Button";
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
  z-index: 10000000;
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
const HomeButton = styled.button``;
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
      <NavbarBack>
        {/* <Sidebar /> */}
        <NavbarView>
          <RowLayout>
            <LogoIMG src={logo} />
            <Text fontFamily={`"Aladin", sans-serif`}>Meta Multiplayer</Text>
          </RowLayout>
          <BarView>
            <FaBars size="30" />
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
      <img
        src={line}
        style={{ position: "absolute", left: -50, width: 1000 }}
      />
      <img
        src={gtaCha}
        style={{ position: "absolute", width: 500, right: 50, bottom: 50 }}
      />
      <Text
        fontFamily="Orbitron"
        fontWeight="700"
        fontSize="40px"
        margin="200px 0 0 0"
        width="50%"
      >
        Metamultiplayer - First Real Metaverse Experience!
      </Text>
      <Text margin="40px 0 0 0" width="35%">
        Play on our GTA 5 roleplay server, Collect & Trade NFT'S, earn MMP
        tokens while playing on our server. Join today!
      </Text>
      <Row>
        <HomeButton>whitepaper</HomeButton>
        <HomeButton>Introduction</HomeButton>
      </Row>
      <Row mgap="0 20px 0 0" margin="100px 0 50px 0">
        <Row backgroundColor="white" padding="5px" borderRadius="20px">
          <img src={weichle} alt="weichle" width="50px" />
        </Row>
        <Row backgroundColor="white" padding="5px" borderRadius="20px">
          <img src={grand} alt="grand" width="50px" />
        </Row>
        <Row backgroundColor="rgba(255, 255, 255, 0.3)" borderRadius="20px">
          <img src={rlight} alt="rlight" width="50px" />
        </Row>
      </Row>
    </Col>
  );
};
export default Top;
