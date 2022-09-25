import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import router  from "next/router";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <>
      <div
        style={{
          background: "black",
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100vw",
          position: "fixed",
          top: "0",
          left: "0",
          color: "white",
          borderTop: "2px solid white",
          borderBottom: "2px solid white"
        }}
      >
        <b
          style={{
            fontSize: "1.25rem",
            display: "inline-block",
            marginRight: "auto",
            cursor: "pointer",
          }}
          onClick={() => {
            router.push("/");
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
