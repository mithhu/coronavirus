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
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
          integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
          crossOrigin=""
        />
        <title>Mithhu</title>
      </Head>
      <DynamicComponentWithNoSSR />
    </div>
  );
}
