import React from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div style={{ background: "white", padding: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <b style={{ fontSize: "1.25rem" }}>Paedia</b>
      <ConnectButton />
    </div>
  );
};

export default Navbar;
