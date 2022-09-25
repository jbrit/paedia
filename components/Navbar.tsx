import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <>
      <div
        style={{
          background: "white",
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100vw",
          position: "fixed",
          top: "0",
          left: "0",
          color: "black",
        }}
      >
        <b
          style={{
            fontSize: "1.25rem",
            display: "inline-block",
            marginRight: "auto",
          }}
        >
          Paedia
        </b>
        <Link href="/dashboard">
          <a href="/dashboard" style={{ marginRight: "2rem" }}>
            Dashboard
          </a>
        </Link>
        <ConnectButton />
      </div>
      <div
        style={{
          marginBottom: "5rem",
        }}
      ></div>
    </>
  );
};

export default Navbar;
