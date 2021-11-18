import React, { useState, useEffect } from "react";
// @import component
import { Text } from "../component/Text";
import { Button } from "../component/Button";
// @import style
import { theme } from "../theme";
// @wallet connection
import { useWeb3React } from "@web3-react/core";
import { injected } from "../component/wallet";
import { StyledSidebar, LinkItem } from "./style";
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
const Sidebar = () => {
  const { active, account, activate } = useWeb3React();
  const [selected, setSelected] = useState("home");
  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }
  const [state, setState] = useState({ mobileView: false });
  const { mobileView } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 768
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  return (
    mobileView && (
      <StyledSidebar onClick={() => localStorage.setItem("rightmenu", "off")}>
        <RenderItem selected={selected} name="Home" onSelected={setSelected} />

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
        <RenderItem selected={selected} name="Team" onSelected={setSelected} />
        <RenderItem selected={selected} name="FAQ" onSelected={setSelected} />

        <LinkItem>
          <Text color={theme.primaryLight}>Discord</Text>
        </LinkItem>
        <LinkItem>
          <Text color={theme.primaryLight}>Opensea</Text>
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
      </StyledSidebar>
    )
  );
};
export default Sidebar;
