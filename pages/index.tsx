import Navbar from "$components/Navbar";
import type { NextPage } from "next";
import Head from "next/head";
import router from "next/router";
const Home: NextPage = () => {
  return (
    <div>
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
        <button
          onClick={() => {
            router.push("/dashboard");
          }}
          style={{
            border: "2px solid white",
            padding: ".75rem 1rem",
            background: "black",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </main>
    </div>
  );
};

export default Home;
