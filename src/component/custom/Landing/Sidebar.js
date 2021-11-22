import React, { useState, useEffect, useRef } from "react";
// @import component
import { Text } from "../../common/Text";
import { Button } from "../../common/Button";
// @import style
import { theme } from "../../../theme";
import styled from "styled-components";
import logo from "../../../assets/MetaMultiplayerLogo.png";
const LinkItem = styled.a`
  position: relative;
  cursor: pointer;
  text-decoration: none;
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
const StyledSidebar = styled.div`
  width: 260px;
  ${() =>
    localStorage.getItem("rightmenu") === "on"
      ? "left: 0px;transition: 0.7s ease;"
      : "left: -290px;transition: 0.7s ease;"}
  background: ${theme.primarySidebar};
  position: fixed;
  height: 100%;
  z-index: 100000;
  padding: 15px;
  box-shadow: 2px 0 5px 0 rgb(0 0 0 / 20%);
  & > *:not(:last-child) {
    margin-bottom: 20px;
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
      <Text color={theme.primaryLight} fontWeight="400">
        {name}
      </Text>
    </LinkItem>
  );
};
const LogoIMG = styled.img`
  margin-right: 0.7rem !important;
  border-style: none;
  height: 45px;
`;
const MenuLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
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
const Sidebar = () => {
  const MenuRef = useRef(null);
  const [selected, setSelected] = useState("home");
  const [state, setState] = useState({ mobileView: false });
  const { mobileView } = state;
  const handleClickOutside = (e) => {
    if (MenuRef.current && MenuRef.current.contains(e.target)) {
      return;
    }
    localStorage.setItem("rightmenu", "off");
  };
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 850
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  useEffect(() => {
    if (localStorage.getItem("rightmenu")) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [localStorage.getItem("rightmenu")]);

  return (
    mobileView && (
      <StyledSidebar
        onClick={() => localStorage.setItem("rightmenu", "off")}
        ref={MenuRef}
      >
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
          <Text>Connect MetaMask</Text>
        </Button>
      </StyledSidebar>
    )
  );
};
export default Sidebar;
