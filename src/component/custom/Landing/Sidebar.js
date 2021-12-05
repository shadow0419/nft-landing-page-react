import React, { useState, useEffect, useRef } from "react";
// @import component
import { Text } from "../../common/Text";
import { Button } from "../../common/Button";
import { Navbardata } from "../../../constant";
// @import style
import {
  LinkItem,
  StyledSidebar,
  LogoIMG,
  MenuLogo,
} from "../../../style/sidebar";
import { theme } from "../../../theme";
import logo from "../../../assets/MetaMultiplayerLogo.png";
import { Col } from "../../common/Layout";

const RenderItem = ({ selected, name, onSelected }) => {
  return (
    <Col align="center">
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
          color={theme.primaryLight}
          fontWeight="400"
          fontSize="25px"
          align="center"
        >
          {name}
        </Text>
      </LinkItem>
    </Col>
  );
};

const Sidebar = () => {
  const MenuRef = useRef(null);
  const [selected, setSelected] = useState("home");
  const [state, setState] = useState({ mobileView: false });
  const { mobileView } = state;
  const menustate = localStorage.getItem("rightmenu");
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
  }, [menustate]);

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
        <Col align="center">
          <Button>
            <Text>Connect MetaMask</Text>
          </Button>
        </Col>
      </StyledSidebar>
    )
  );
};
export default Sidebar;
