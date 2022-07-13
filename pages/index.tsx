import type { NextPage, GetStaticProps } from "next";
import { google } from "googleapis";
import Head from "next/head";
import { load } from "cheerio";

const documentId = "1MlA80s01YNhr-eGjKxU3mL3MH5cFMIwbws5FnF8YpZs";

interface Props {
  htmlString: string;
  head: string;
}

function millisecondsToYear(mSeconds: number) {
  var checkYear = Math.floor(mSeconds / 31536000000);
  return checkYear;
}

const Home: NextPage<Props> = ({ head, htmlString }) => {
  const date = Date.now() - Date.parse("Feb, 2015");

  return (
    <>
      <Head>
        <title>Marc Barbeau | Software Engineer</title>
        <meta
          name="description"
          content={`Creative Software Developer with over ${millisecondsToYear(
            date
          )} years industry experience.`}
        />
        <link rel="icon" href="/favicon.ico" />
        <div dangerouslySetInnerHTML={{ __html: head }} />
      </Head>
      <main dangerouslySetInnerHTML={{ __html: htmlString }} />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (context) => {
  const drive = google.drive({
    version: "v3",
    auth: process.env.GOOGLE_DOCS_API_KEY,
  });

  const htmlString = await drive.files
    .export({
      fileId: documentId,
      mimeType: "text/html",
    })
    .then(({ data }) => data as string);

  const $ = load(htmlString);

  return {
    props: {
      head: $("head").html(),
      htmlString: $("body").html(),
    },
  };
};
