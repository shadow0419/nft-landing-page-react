import styled from "styled-components";

export const CoinImg = styled.img`
  width: 450px;
  position: "absolute";
  right: "5%";
  top: "5%";
  z-index: 2;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;
export const DescItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 10px auto 20px 3%;
  :hover {
    img {
      margin-top: 35px;
    }
  }
  @media only screen and (max-width: 900px) {
    :hover {
      img {
        margin-bottom: 50px;
      }
    }
  }
`;
export const FrontImg = styled.img`
  transition: 0.5s;
  margin-top: 10px;
`;
