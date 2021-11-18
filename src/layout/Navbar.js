import React, { useEffect, useState } from "react";
// @import component
import { Text } from "../component/Text";
import { Button } from "../component/Button";
// @import assets
import logo from "../assets/logo.png";
// @wallet connection
import { useWeb3React } from "@web3-react/core";
import { injected } from "../component/wallet";
import { FaBars } from "react-icons/fa";
// @import style
import { LogoIMG } from "./style";
import { theme } from "../theme";
import {
  NavbarBack,
  NavbarView,
  RowLayout,
  BarView,
  LinkLayout,
  LinkItem,
} from "./style";
import Sidebar from "./Sidebar";
const RenderItem = ({ selected, name, onSelected }) => {
  return (
    <LinkItem
      sel={
        selected.toString().toLowerCase() === name.toString().toLowerCase()
          ? true
          : false
      }
      href={`#${name.toString().toLowerCase()}`}
      onClick={() => {
        onSelected(`${name.toString().toLowerCase()}`);
      }}
    >
      <Text color={theme.primaryLight} fontWeight="400">
        {name}
      </Text>
    </LinkItem>
  );
};
const Navbar = () => {
  const [menushow, setMenushow] = useState(false);
  const [selected, setSelected] = useState("home");
  const { active, account, activate } = useWeb3React();
  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }
  useEffect(() => {
    setMenushow(localStorage.getItem("rightmenu") === "on" ? true : false);
  }, [localStorage.getItem("rightmenu")]);
  const MenuShow = () => {
    if (menushow) {
      localStorage.setItem("rightmenu", "off");
    } else {
      localStorage.setItem("rightmenu", "on");
    }
    setMenushow((prev) => !prev);
  };

  return (
    <NavbarBack>
      <Sidebar />
      <NavbarView>
        <RowLayout>
          <LogoIMG src={logo} />
          <Text fontSize="1.25rem" fontFamily={`"Aladin", sans-serif`}>
            Bad Wolf Club
          </Text>
        </RowLayout>
        <BarView>
          <FaBars size="30" onClick={MenuShow} />
        </BarView>
        <LinkLayout>
          <RenderItem
            selected={selected}
            name="Home"
            onSelected={setSelected}
          />

          <RenderItem
            selected={selected}
            name="Rarity"
            onSelected={setSelected}
          />
          <RenderItem
            selected={selected}
            name="Roadmap"
            onSelected={setSelected}
          />
          <RenderItem
            selected={selected}
            name="Team"
            onSelected={setSelected}
          />
          <RenderItem selected={selected} name="FAQ" onSelected={setSelected} />

          <LinkItem>
            <Text color={theme.primaryLight} fontWeight="400">
              Discord
            </Text>
          </LinkItem>
          <LinkItem>
            <Text color={theme.primaryLight} fontWeight="400">
              Opensea
            </Text>
          </LinkItem>

          {active ? (
            <Button>
              {`${account.slice(0, 6)}...
                ${account.slice(account.length - 4, account.length)}`}
            </Button>
          ) : (
            <Button
              onClick={() => {
                connect();
              }}
            >
              Connect MetaMask
            </Button>
          )}
        </LinkLayout>
      </NavbarView>
    </NavbarBack>
  );
};
export default Navbar;
