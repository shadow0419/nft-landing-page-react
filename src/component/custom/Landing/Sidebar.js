import React, { useState, useEffect } from "react";
// @import component
import { Text } from "../../common/Text";
// @import style
import { theme } from "../../../theme";
import styled from "styled-components";
// @wallet connection
const LinkItem = styled.a`
  position: relative;
  cursor: pointer;
  text-decoration: none;
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
const ConnectButton = styled.button`
  background: linear-gradient(90.76deg, #ff9d2a 3.46%, #ffd707 102.26%);
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  margin: 30px 0 0 0;
  padding: 5px 0;
  display: flex;
  width: 100%;
  outline: none;
  cursor: pointer;
  border: none;
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
const Sidebar = () => {
  const [selected, setSelected] = useState("home");
  const [state, setState] = useState({ mobileView: false });
  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 768
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);
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
  return (
    mobileView && (
      <StyledSidebar onClick={() => localStorage.setItem("rightmenu", "off")}>
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

        <ConnectButton>Connect MetaMask</ConnectButton>
      </StyledSidebar>
    )
  );
};
export default Sidebar;
