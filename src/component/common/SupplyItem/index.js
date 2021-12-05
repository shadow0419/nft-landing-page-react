import React from "react";
import { Col } from "../Layout";
import styled from "styled-components";
const SupplyStyle = styled.div`
  align-items: center;
  border-radius: 45px;
  background-color: #1e1459;
  padding: 10px 10px 10px 10px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  :hover {
    box-shadow: 0px 4px 97px rgba(255, 15, 246, 0.51);
  }
`;
export const Product = styled.div`
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.height ? props.height : "auto")};
  border-radius: 38px;
  max-width: 240px;
  width: 100%;
  transition: all 0.5s ease-in;
  position: relative;
  overflow: hidden;

  ::before {
    position: absolute;
    top: 0;
    left: -100%;
    z-index: 2;
    display: block;
    content: "";
    width: 50%;
    height: 100%;
    background: -webkit-linear-gradient(
      left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 100%
    );
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 100%
    );
    -webkit-transform: skewX(-25deg);
    transform: skewX(-25deg);
  }
  :hover::before {
    -webkit-animation: shine 1.3s;
    animation: shine 1.3s;
    @-webkit-keyframes shine {
      100% {
        left: 125%;
      }
    }
    @keyframes shine {
      100% {
        left: 125%;
      }
    }
  }
`;

export const SupplyItem = (props) => {
  return (
    <SupplyStyle>
      <Col backgroundColor="#ffffff" borderRadius="38px" align="center">
        <Product>
          <img
            src={props.img}
            style={{ height: props.height, width: "100%" }}
            alt="product"
          />
        </Product>
      </Col>
    </SupplyStyle>
  );
};
