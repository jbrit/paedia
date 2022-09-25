import Navbar from "$components/Navbar";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Paedia</title>
        <meta name="description" content="Paedia - Community driven Web3 Education" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  );
};

export default Home;
