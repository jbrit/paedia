import CardContainer from "$components/CardContainer";
import Navbar from "$components/Navbar";
import { courses } from "$constants";
import type { NextPage } from "next";
import Head from "next/head";
import router from "next/router";

const Home: NextPage = () => {
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
        <h2>Streams</h2>
        <hr />
        <CardContainer>
          <StreamCard streamId={1} creator="0xcD4bde67fe7C6Eb601d03a35Ea8a55eB2b136965" tokenScore={100} />
          <StreamCard streamId={2} creator="0xFa0F0637F273a72ea73B274D51Baf0D3e31FDd8a" tokenScore={25} />
        </CardContainer>
        <h2>Courses</h2>
        <hr />
        <CardContainer extraColumn>
          {courses.map((course) => (
            <CourseCard {...course} courseId={course.id} key={course.id} />
          ))}
        </CardContainer>
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
        background: "transparent",
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
        background: "transparent",
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
