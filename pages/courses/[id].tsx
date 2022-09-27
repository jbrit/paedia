import Navbar from "$components/Navbar";
import { getCourseById } from "$constants";
import { completeCourse } from "actions";
import { BigNumber, ethers } from "ethers";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { NFTStorage } from "nft.storage";
import { useAccount, useProvider, useSigner } from "wagmi";

const keyA =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGRFOUM2NDAyODVBNEI3MjEwN2Q2MEMwZj";
const keyB =
  "kzRjMxMTRCMGYxQWFiNDQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2MzMwOTkxMTQ2NCwibmFtZSI6InB1YmxpYyJ9.b3cDjovrEwlM0RN_5GdWYP9zkEXowZp7MwDh9cnawdY";

const Course: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const course = getCourseById(Number(id));
  console.log(course);
  const signer = useSigner();
  const o = useProvider();
  const provider = signer.data ?? o;
  const { address } = useAccount();
  return (
    <>
      <Head>
        <title>Paedia | Course</title>
        <meta
          name="description"
          content="Paedia (Course) - Community driven Web3 Education"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main style={{ padding: "1.5rem 3rem" }}>
        <Link href="/dashboard">{"<<< Dashboard"}</Link>
        {course && (
          <>
            <h2>
              Course {id} - {course.name}
            </h2>
            <hr />
            <div style={{ marginBottom: "1rem", lineHeight: "1.5rem" }}>
              Curated by: {course.creator}
            </div>

            {course.lessons.map((lesson, index) => (
              <div
                key={index}
                style={{ marginBottom: "1rem", lineHeight: "1.5rem" }}
              >
                {lesson}
              </div>
            ))}
            <canvas
              style={{ display: "none" }}
              width="1200"
              height="100"
              id="myCanvas"
            ></canvas>
            <button
              onClick={async () => {
                const canvas = document.getElementById(
                  "myCanvas"
                ) as HTMLCanvasElement;
                const ctx = canvas!.getContext("2d");
                ctx!.font = "30px Arial";
                ctx!.textAlign = "center";
                ctx!.fillText(
                  address! + " -=- Course: " + course.id,
                  canvas!.width / 2,
                  canvas!.height / 2
                );
                const blobFromCanvas = await new Promise<Blob>((resolve) => {
                  canvas!.toBlob((blob) => {
                    resolve(blob!);
                  });
                });
                const client = new NFTStorage({ token: keyA + keyB });
                const metadata = await client.store({
                  name: "Paedia Course NFT",
                  description:
                    "This Paedia NFT means that " +
                    address! +
                    " has completed the course " +
                    course.name,
                  image: blobFromCanvas,
                });
                console.log(metadata);
                await completeCourse(
                  provider,
                  BigNumber.from(id),
                  metadata.url
                );
                alert(`Course ${id} completed`);
              }}
              style={{
                border: "2px solid white",
                marginTop: "2rem",
                marginBottom: "1rem",
                padding: ".5rem 2rem",
                background: "black",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
            >
              Complete Course
            </button>
            <div style={{ fontSize: "0.8rem" }}>
              *Completing this course gives you {course.tokenScore} PCC and an
              NFT
            </div>
          </>
        )}
      </main>
    </>
  );
};
export default Course;
