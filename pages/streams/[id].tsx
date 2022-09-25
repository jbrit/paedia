import Navbar from "$components/Navbar";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import router from "next/router";

const Stream: NextPage = () => {
  return (
    <>
      <Head>
        <title>Paedia | Stream</title>
        <meta
          name="description"
          content="Paedia (Stream) - Community driven Web3 Education"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main style={{ padding: "1.5rem 3rem" }}>
        <Link href="/dashboard">{"<<< Dashboard"}</Link>
        <h2>Stream [id]</h2>
        <hr />
      </main>
    </>
  );
};
export default Stream;
