import React from "react";
import Head from "next/head";
// import SimpleExample from '../components/Map'
import dynamic from "next/dynamic";
// import EventsExample from "../components/EventsExample";

import '../styles.scss'

const DynamicComponentWithNoSSR = dynamic(() => import("../components/Map"), {
  ssr: false
});

export default function index() {
  return (
    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&display=swap" rel="stylesheet" />
        <title>Corona Virus</title>
      </Head>
      <DynamicComponentWithNoSSR />
    </div>
  );
}
