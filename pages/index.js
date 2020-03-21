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
        <title>Corona Virus</title>
      </Head>
      <DynamicComponentWithNoSSR />
    </div>
  );
}
