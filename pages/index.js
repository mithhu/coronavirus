import React from "react";
import Head from "next/head";
// import SimpleExample from '../components/Map'
import dynamic from "next/dynamic";
// import EventsExample from "../components/EventsExample";

const DynamicComponentWithNoSSR = dynamic(() => import("../components/Map"), {
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
