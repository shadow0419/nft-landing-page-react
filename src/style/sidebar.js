import styled from "styled-components";
import { theme } from "../theme";

export const LinkItem = styled.a`
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
export const StyledSidebar = styled.div`
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
export const LogoIMG = styled.img`
  margin-right: 0.7rem !important;
  border-style: none;
  height: 45px;
`;
export const MenuLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
