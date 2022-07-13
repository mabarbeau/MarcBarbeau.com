import type { NextPage, GetStaticProps } from "next";
import styles from "../styles/cv.module.css";
import { google } from "googleapis";
import { load } from "cheerio";
import Head from "next/head";

const documentId = "1Bi9BMSDxPJSsAe9xsmcwq4GIoNO6GQMXQc_Pwpudhdo";

interface Props {
  htmlString: string;
  head: string;
}

const Home: NextPage<Props> = ({ head, htmlString }) => {
  return (
    <>
      <Head>
        <title>Marc Barbeau | CV</title>
        <div dangerouslySetInnerHTML={{ __html: head }}></div>
        <meta
          name="description"
          content="Resume from Marc Barbeau, Software Engineer, specializing in front-end web applications."
        />
      </Head>
      <main>
        <hr />
        <div
          className={styles.document}
          dangerouslySetInnerHTML={{ __html: htmlString }}
        ></div>
        {/* <button>Preview on Google</button>
        <button>Print</button>
        <button>Download</button> */}
      </main>
    </>
  );
};

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

export default Home;
