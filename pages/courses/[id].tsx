import Navbar from "$components/Navbar";
import { getCourseById } from "$constants";
import { completeCourse } from "actions";
import { BigNumber, ethers } from "ethers";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAccount, useProvider, useSigner } from "wagmi";

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
            <button
              onClick={async () => {
                await completeCourse(provider, BigNumber.from(id), "tokenURI");
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
