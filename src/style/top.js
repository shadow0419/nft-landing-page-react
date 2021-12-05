import styled, { keyframes } from "styled-components";

const transitionTime = 700;
export const LogoIMG = styled.img`
  margin-right: 0.7rem !important;
  border-style: none;
  height: 45px;
`;
export const NavbarBack = styled.div`
  display: flex;
  justify-content: center;

  top: 0;
  width: 100%;
  padding: 0 2rem 1rem 1rem;
  z-index: 10;
`;
export const NavbarView = styled.div`
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
export const RowLayout = styled.div`
  display: none;
  @media only screen and (max-width: 850px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
export const MenuLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

export const BarView = styled.div`
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
export const LinkLayout = styled.div`
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
export const LinkItem = styled.a`
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
export const WhiteButton = styled.button`
  z-index: 1;
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
export const phraseAnim = keyframes`
0%{
    opacity:0;
    transform:translateX(999px)
}
100%{
    opacity:1;
    transform:translateX(0)
}
`;

export const HeaderText = styled.span`
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
export const GtaImg = styled.img`
  width: 500px;
  @media only screen and (max-width: 1100px) {
    display: none;
  }
  @media only screen and (max-width: 800px) {
    display: block;
    position: absolute;
    z-index: -1;
    opacity: 0.2;
  }
`;

export const PageStyle = styled.div`
  width: 100%;
  padding: 0 50px;
  position: relative;
  background-color: rgb(29, 10, 51);
  z-index: 10;
  @media only screen and (max-width: 400px) {
    padding: 0 10px;
  }
  @media only screen and (max-width: 500px) {
    .header_sub {
      width: 100%;
      text-align: center;
      justify-content: center;
    }
  }
`;
export const SnowView = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  div {
    width: 100%;
    height: 100%;
  }
`;
export const HeaderIcon = styled.div`
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

export const GrandIcon = styled.div`
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
export const RockIcon = styled.div`
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
