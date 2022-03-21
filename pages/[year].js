import fs from "fs";
import YearContent from "../components/YearContent";
import Head from "next/head";
export default function year({ year, data }) {
  const pageContent = data.content;
  return (
    <div>
      <Head>
        <title>{year}</title>
      </Head>
      <h1 className="text-center text-lg my-8"> The Intelligence Community in the {year + "'s"}</h1>
      {pageContent.map((content, index) => {
        if (content.cartoon) {
          return (
            <div className="mx-20 mt-6 text-center" key={index}>
              <YearContent text={content.text} cartoon={content.cartoon} />
            </div>
          );
        } else {
          return (
            <div className="mx-20 mt-6 text-center" key={index}>
              <YearContent heading={content.title} text={content.text} />
            </div>
          );
        }
      })}
    </div>
  );
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync("data");
  const paths = files.map((filename) => ({
    params: {
      year: filename.replace(".json", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { year } }) => {
  const data = require("../data/" + year + ".json");
  return {
    props: {
      data,
      year,
    },
  };
};
