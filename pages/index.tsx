import Navbar from "$components/Navbar";
import { Button } from "@fluentui/react-components";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Paedia</title>
        <meta
          name="description"
          content="Paedia - Community driven Web3 Education"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main style={{ padding: "6rem 2rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "4rem" }}>Paedia</h1>
        <p style={{ fontSize: "2rem" }}>Community driven Web3 Education</p>
        <Button>Get Started</Button>
      </main>
    </div>
  );
};

export default Home;
