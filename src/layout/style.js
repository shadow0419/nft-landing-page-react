import styled from "styled-components";
import { theme } from "../theme";
export const WholeContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const LogoIMG = styled.img`
  margin-right: 0.7rem !important;
  border-style: none;
  height: 45px;
`;

export const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 1.5rem !important;
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.65) 100%
  );
  margin-top: 3rem;
`;
export const FooterView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1140px;
  @media only screen and (max-width: 1200px) {
    max-width: 960px;
  }
  @media only screen and (max-width: 992px) {
    max-width: 720px;
  }
  @media only screen and (max-width: 768px) {
    max-width: 540px;
    flex-direction: column;
    & > *:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;
export const LogoFootIMG = styled.img``;
export const IconView = styled.div`
  & > *:not(:last-child) {
    margin-right: 1.5rem;
  }
`;
export const NftView = styled.a`
  cursor: pointer;
  color: white;
`;
export const NftIMG = styled.img`
  box-shadow: 0px 1px 6px rgb(0 0 0 / 25%);
  width: 70px;
  height: 45px;
`;

export const NavbarBack = styled.div`
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
  position: fixed;
  padding: 0 2rem 1rem 1rem;
`;

export const NavbarView = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1140px;
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
export const RowLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const BarView = styled.div`
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
export const LinkLayout = styled.div`
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
export const LinkItem = styled.a`
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
