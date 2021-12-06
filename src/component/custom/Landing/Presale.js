import React from "react";
import styled from "styled-components";
// @import component
import { Text } from "../../common/Text";
// @import assets
import presaleImg from "../../../assets/descomposition.svg";
import metamaskImg from "../../../assets/metamask.png";
import bnbImg from "../../../assets/binance-coin-logo.png";
import MetaMultiplayerLogo from "../../../assets/MetaMultiplayerLogo.png";
import buyeffect from "../../../assets/buyeffect.png";
// import getWeb3 from "../../../getWeb3";
import { Row, Col } from "../../common/Layout";
import { BuyInput, StyledInput, ConnectButton } from "../../../style/presale";
const BuyButton = styled.button`
  background: url(${buyeffect});
  background-color: #16beaa;
  border-radius: 20px;
  justify-content: center;
  max-width: 300px;
  margin: 43px 0 0 0;
  padding: 10px 0;
  display: flex;
  width: 60%;
  outline: none;
  border: none;
  box-shadow: 0px 4px 97px rgba(0, 255, 255, 0.51);
  position: relative;
`;
const Presale = () => {
  // const [userAccount, setUserAccount] = useState();
  // useEffect(() => {
  //   ConnectWallet();
  // }, []);
  // const ConnectWallet = async () => {
  //   const web3 = await getWeb3();
  //   const accounts = await web3.eth.getAccounts();
  //   setUserAccount(accounts[0]);
  // };

  return (
    <Col
      id="presale"
      background={`url(${presaleImg})`}
      height="100%"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      width="100%"
      align="center"
      padding="36px 0 88px 0"
      position="relative"
    >
      <Text
        fontFamily="Orbitron"
        fontWeight="700"
        fontSize="40px"
        align="center"
      >
        Presale
      </Text>
      {/* <Text fontSize="20px" align="center" margin="10px 0 0 0" maxWidth="700px">
        Make sure to use Metamask/Trust Wallet to interact with this form. Min
        Contribution: 0.1 BNB Max Contribution : 5 BNB
      </Text> */}
      <ConnectButton disabled={true}>
        <Row
          width="55px"
          height="55px"
          backgroundColor="rgb(255, 255, 255,0.4)"
          borderRadius="100%"
        >
          <img src={metamaskImg} alt="metamask" />
        </Row>
        <Text fontSize="20px" align="center" margin="0 0 0 10px" flex="none">
          {/* {userAccount
            ? `${userAccount.slice(0, 6)}...${userAccount.slice(
                userAccount.length - 4,
                userAccount.length
              )}`
            : "Conecct to meta mask"} */}
          Connect to metamask
        </Text>
      </ConnectButton>
      <Col
        padding="45px 0 33.3px 0"
        background="rgba(255, 255, 255, 0.1)"
        backdropFilter="blur(20px) grayscale(1);"
        borderRadius="60px"
        maxWidth="600px"
        align="center"
        margin="32px 0 0 0"
        position="relative"
        opacity="0.63"
        shadow="0px 0px 30px #ffffff;"
      >
        <Text
          fontWeight="700"
          fontFamily="Orbitron"
          position="absolute"
          fontSize="45px"
          rotate="rotate(-27deg)"
          margin="15%"
          zIndex="5"
        >
          Coming Soon
        </Text>
        <Col align="center" mgap="0 0 30px 0">
          <BuyInput shadow="0px 0px 20px #ffffff">
            <StyledInput disabled placeholder="BNB" />
            <Row
              width="40px"
              height="40px"
              backgroundColor="rgba(92, 92, 92, 0.9)"
              borderRadius="100%"
              border="3px solid #ffffff"
            >
              <img src={bnbImg} alt="bnb" width="30px" />
            </Row>
          </BuyInput>
          <BuyInput shadow="0px 0px 20px #ffffff">
            <StyledInput disabled placeholder="MMP" />
            <Row
              width="40px"
              height="40px"
              backgroundColor="rgba(92, 92, 92, 0.9)"
              borderRadius="100%"
              border="3px solid #ffffff"
            >
              <img src={MetaMultiplayerLogo} alt="multi" width="30px" />
            </Row>
          </BuyInput>
        </Col>
        <BuyButton disabled>
          <Text fontSize="24px" align="center">
            Buy
          </Text>
        </BuyButton>
      </Col>
    </Col>
  );
};
export default Presale;
