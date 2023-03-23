import { ReactNode } from "react";
import css from "./index.module.css";
import Head from "next/head";

const SEOHeader = (): JSX.Element => {
  return (
    <Head>
      <title>Mario&apos; Website</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon_io/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon_io/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon_io/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon_io/site.webmanifest" />
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
