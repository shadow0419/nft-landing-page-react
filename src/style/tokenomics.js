import styled from "styled-components";

export const TokenItems = styled.div`
  display: grid;
  grid-template: repeat(1, 1fr) / repeat(4, 1fr);
  padding: 50px 0;
  border-radius: 50px;
  margin: auto;
  & > *:not(:first-child) {
    border-left: 1px solid #ffffff;
  }
  @media only screen and (max-width: 900px) {
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    & > *:not(:first-child) {
      border: none;
    }
  }
  @media only screen and (max-width: 450px) {
    grid-template: repeat(4, 1fr) / repeat(1, 1fr);
  }
`;

export const TokenItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 15% 0 20%;
  z-index: 2;
  div {
    background: #16beaa;
    border-radius: 10px;
    z-index: 0;
    padding: 5px 5px 5px 8px;
    position: relative;
    text-align: center;
    box-shadow: 0px 4px 97px rgba(22, 190, 170, 0.51);
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
  }
`;

export const TokenItemImg = styled.img``;
