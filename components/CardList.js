import React, { useState, useEffect } from "react";

export const CardList = props => {
  const [totalData, setTotalData] = useState({});
  const [bdData, setBdData] = useState({});
  useEffect(() => {
    async function fetchInfo() {
      const response = await fetch(
        "https://covid19.mathdro.id/api/"
      ).then(res => res.json());
      setTotalData(response);
    }
    fetchInfo();
    async function fetchBdData() {
      const response = await fetch(
        "https://covid19.mathdro.id/api/countries/BD"
      ).then(res => res.json());
      setBdData(response);
    }
    fetchBdData();
  }, []);
  return (
    <div className="container">
      <article className="article">
        <p>Total Confirmed</p>
        <p>{totalData.confirmed ? totalData.confirmed.value : undefined}</p>
      </article>
      <article className="article">
        <p>Total Recovered</p>
        <p>{totalData.recovered ? totalData.recovered.value : undefined}</p>
      </article>
      <article className="article">
        <p>Total Death</p>
        <p>{totalData.deaths ? totalData.deaths.value : undefined}</p>
      </article>
      <article className="article">
        <p>Confirmed Today</p>
        <p>{props.dailyData}</p>
      </article>
    </div>
  );
};
