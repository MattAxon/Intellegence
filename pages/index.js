import Head from "next/head";
import styles from "../styles/Home.module.css";
import Timeline from "../components/Timeline";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Intelligence Report Project</title>
        <meta
          name="description"
          content="Matt and Will's Intellegence report project"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="place-content-center mb-16">
        <h1 className="text-center text-lg my-8">
          United States Intelligence Community Report
        </h1>
        <iframe
          className="mx-auto"
          src="https://www.youtube.com/embed/OFIG6k4B3zg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h1 className="text-center mt-8">Timeline of US Intellegence Community{" "}</h1>
        <div className="justify-center">
          <Timeline
          className="mx-auto"
            colorNum={3}
            hoverColor1={"hover:bg-red-400"}
            color1={"bg-red-500"}
            color2={"bg-blue-500"}
            hoverColor2={"hover:bg-blue-400"}
            hoverColor3="hover:bg-neutral-50"
            color3="bg-neutral-100"
          />
        </div>
      </div>
    </div>
  );
}
