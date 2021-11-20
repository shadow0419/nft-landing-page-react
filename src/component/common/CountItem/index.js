import React from "react";
import styled from "styled-components";
import { Text } from "../Text";
import ReactTooltip from "react-tooltip";
const StyledRec = styled.div`
  background: ${(props) =>
    `linear-gradient(95.03deg, ${props.gfcolor} 0%, ${props.glcolor} 103.72%)`};
  position: relative;
  cursor: pointer;
  border-top-right-radius: 35px;
  border-bottom-right-radius: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 50px;
  z-index: ${(props) => 30 - props.index};
  width: calc(${(props) => props.width}% + 20px);
  .__react_component_tooltip {
    border-radius: 20px;
    font-size: 20px;
    margin-top: -20px !important;

    background-color: white;
    color: black;
    ::after {
      background: #fff !important;
      border: none !important;
      border-radius: 50% !important;
      margin: 0 !important;
      width: 20px !important;
      height: 20px !important;
      bottom: -10px !important;
      left: calc(50% - 10px) !important;
    }
  }
`;

export const CountItem = ({ item, index }) => {
  return (
    <>
      <StyledRec
        index={index}
        width={item.width}
        gfcolor={item.gfcolor}
        glcolor={item.glcolor}
        data-tip
        data-for={`countItem${index + 1}`}
      >
        <Text align="right" fontSize="30px">
          {item.percent}%
        </Text>
        <ReactTooltip
          id={`countItem${index + 1}`}
          place="top"
          effect="solid"
          globalEventOff="click"
        >
          <Text color="black">{item.percent} </Text>
        </ReactTooltip>
      </StyledRec>
    </>
  );
};
