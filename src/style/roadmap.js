import styled from "styled-components";

export const MapContainer = styled.div`
  display: flex;

  align-items: center;
  max-width: 1200px;
  margin: auto;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const RoadmapDiv1 = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 100px;
    @media only screen and (max-width: 800px) {
      margin-bottom: 60px;
    }
  }
  & > *:last-child {
    margin-bottom: 100px;
    @media only screen and (max-width: 800px) {
      margin-bottom: 60px;
    }
  }
  display: flex;
  flex-direction: column;
  margin: 2%;
`;

export const RoadmapDiv2 = styled.div`
  & > *:not(:first-child) {
    margin-top: 100px;
  }
  display: flex;
  flex-direction: column;
  margin: 2%;
`;
export const CenterImg = styled.div`
  width: 60px;
  @media only screen and (max-width: 800px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
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
export const DashLine = styled.img`
  height: 170px;
`;
