import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import "../styles.scss";

const DynamicComponentWithNoSSR = dynamic(() => import("./Homepage"), {
  ssr: false
});

export default function index() {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="../public/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&display=swap"
          rel="stylesheet"
        />
        <title>Corona Virus</title>
      </Head>
      <DynamicComponentWithNoSSR />
    </div>
  );
}
