import styled from "styled-components";

export const BuyInput = styled.div`
  max-width: 450px;
  background: trasparent;
  border-radius: 40px;
  border: 3px solid #ffffff;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  justify-content: space-between;
  box-shadow: ${(props) => props.shadow || 0};
`;
export const StyledInput = styled.input`
  font-size: 20px;
  background-color: transparent;
  color: #9e9e9e;
  border: none;
  outline: none;
  width: 80%;
  &::placeholder {
    color: white;
  }
`;
export const ConnectButton = styled.button`
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  margin: 30px 0 0 0;
  padding: 5px 0;
  background: linear-gradient(90.76deg, #ff9d2a 3.46%, #ffd707 102.26%);
  backdrop-filter: blur(192px);
  box-shadow: 0px 4px 97px rgba(255, 153, 0, 0.51);
  display: flex;
  width: 100%;
  outline: none;
  cursor: not-allowed;
  border: none;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  transition: opacity 0.3s ease-in-out;
  z-index: 5;
  /* :hover {
    box-shadow: 0px 4px 97px rgba(255, 153, 0, 0.81);
  }
  :before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
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

  :hover:before {
    opacity: 1;
  } */
`;
