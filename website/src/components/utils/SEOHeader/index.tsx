import { ReactNode } from "react";
import css from "./index.module.css";
import Head from "next/head";

const SEOHeader = (): JSX.Element => {
  return (
    <Head>
      <title>Mario&apos Website</title>
      <meta name="tile" content="Mario's Website<" />
      <meta
        name="description"
        content="Come have a look at my current projects or drop by my blog to stay upto date with the newest technologies"
      />
      <meta
        property="og:description"
        content="Come have a look at my current projects or drop by my blog to stay upto date with the newest technologies"
      />
      <meta
        property="twitter:description"
        content="Come have a look at my current projects or drop by my blog to stay upto date with the newest technologies"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Mario's Website<" />
      {/* add images here */}
      {/* double check the twitter card martin wants */}
      <meta name="twitter:card" content="summary" />
      {/* <meta name="twitter:site" content="@durangostacos" /> */}
      {/* <meta name="twitter:url" content="localhost" /> */}
      <meta name="twitter:title" content="Mario's Website<" />
    </Head>
  );
};

export default SEOHeader;
