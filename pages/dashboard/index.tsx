import CardContainer from "$components/CardContainer";
import Navbar from "$components/Navbar";
import { courses } from "$constants";
import { holdsSBT } from "actions";
import type { NextPage } from "next";
import Head from "next/head";
import router from "next/router";
import { useAccount, useProvider, useSigner } from "wagmi";
import { useQuery } from "@tanstack/react-query";
import { WorldIDWidget, VerificationResponse } from "@worldcoin/id";
import { useState } from "react";
import { nftContract } from "contract-factory";
import { defaultAbiCoder  as abi} from "@ethersproject/abi";

const Home: NextPage = () => {
  const signer = useSigner();
  const o = useProvider();
  const provider = signer.data ?? o;
  const { address, isConnected, isDisconnected } = useAccount();
  const [verificationResponse, setVerificationResponse] =
    useState<VerificationResponse | null>(null);
  const { isSuccess, isLoading, data, isError, remove, refetch } = useQuery(
    ["sbt"],
    () => holdsSBT(provider, address!),
    {
      enabled: !!address,
    }
  );
  return (
    <>
      <Head>
        <title>Paedia | Dashboard</title>
        <meta
          name="description"
          content="Paedia (Dashboard) - Community driven Web3 Education"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main style={{ padding: "1.5rem 3rem" }}>
        {isSuccess && !data && (
          <>
            <WorldIDWidget
              actionId="wid_staging_5b1d3e9fe7676866467b8bc0054be7ff" // obtain this from developer.worldcoin.org
              signal={address!}
              enableTelemetry
              onSuccess={(response) => {
                setVerificationResponse(response);
              }} // you'll actually want to pass the proof to the API or your smart contract
              onError={(error: any) => console.error(error)}
            />
            <div>
              <button
                onClick={() => {
                  if (verificationResponse) {
                    const { merkle_root, nullifier_hash, proof } =
                      verificationResponse;
                    const unpackedProof = abi.decode(["uint256[8]"], proof)[0];
                    nftContract(provider)
                      .mintNFT(
                        address!,
                        merkle_root,
                        nullifier_hash,
                        unpackedProof,
                        address!,
                        ""
                      )
                      .then((tx) => {
                        alert("Minting NFT");
                        tx.wait(3);
                        alert("NFT successfully minted");
                      })
                      .catch(() => {
                        alert("There was an error minitng your NFT");
                      });
                  }
                }}
                style={{
                  border: "2px solid white",
                  padding: ".75rem 1rem",
                  background: "black",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                Mint NFT
              </button>
            </div>
          </>
        )}
        {isSuccess && data && (
          <>
            <h2>Streams</h2>
            <hr />
            <CardContainer>
              <StreamCard
                streamId={1}
                creator="0xcD4bde67fe7C6Eb601d03a35Ea8a55eB2b136965"
                tokenScore={100}
              />
              <StreamCard
                streamId={2}
                creator="0xFa0F0637F273a72ea73B274D51Baf0D3e31FDd8a"
                tokenScore={25}
              />
            </CardContainer>
            <h2>Courses</h2>
            <hr />
            <CardContainer extraColumn>
              {courses.map((course) => (
                <CourseCard {...course} courseId={course.id} key={course.id} />
              ))}
            </CardContainer>
          </>
        )}
      </main>
    </>
  );
};
type StreamCardProps = {
  streamId: number;
  creator: string;
  tokenScore: number;
};
const StreamCard = ({ streamId, creator, tokenScore }: StreamCardProps) => (
  <div style={{ border: "2px solid white", padding: "1rem" }}>
    <div style={{ marginBottom: ".75rem" }}> Stream ID: {streamId}</div>
    <div style={{ marginBottom: ".75rem" }}> Creator: {creator}</div>
    <div style={{ marginBottom: "1.75rem" }}>Token Score: {tokenScore} PCC</div>
    <button
      onClick={() => {
        router.push(`/streams/${streamId}`);
      }}
      style={{
        border: "2px solid white",
        padding: ".5rem",
        background: "black",
        width: "100%",
        textTransform: "uppercase",
        cursor: "pointer",
      }}
    >
      Join
    </button>
  </div>
);
type CourseCardProps = {
  name: string;
  description: string;
  creator: string;
  tokenScore: number;
  courseId: number;
};
const CourseCard = ({
  name,
  description,
  creator,
  tokenScore,
  courseId,
}: CourseCardProps) => (
  <div style={{ border: "2px solid white", padding: "1rem" }}>
    <div
      style={{ marginBottom: ".75rem", fontSize: "1.2rem", fontWeight: "600" }}
    >
      {name}
    </div>
    <p>{description}</p>
    <div style={{ marginBottom: ".75rem" }}> Creator: {creator}</div>
    <div style={{ marginBottom: "1.75rem" }}>Token Score: {tokenScore} PCC</div>
    <button
      onClick={() => {
        router.push(`/courses/${courseId}`);
      }}
      style={{
        border: "2px solid white",
        padding: ".5rem",
        background: "black",
        width: "100%",
        textTransform: "uppercase",
        cursor: "pointer",
      }}
    >
      View
    </button>
  </div>
);

export default Home;
