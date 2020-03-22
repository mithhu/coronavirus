import React, { useState, useEffect } from "react";
import "./ChartCardList.scss";

export const GlobalData = props => {
  const [totalData, setTotalData] = useState({});
  const [maxDeath, setMaxDeath] = useState([]);

  useEffect(() => {
    async function fetchInfo() {
      const response = await fetch(
        "https://covid19.mathdro.id/api/"
      ).then(res => res.json());
      setTotalData(response);
    }
    fetchInfo();
    async function fetchMaxDeath() {
      const response = await fetch(
        "https://covid19.mathdro.id/api/deaths"
      ).then(res => res.json());
      setMaxDeath(response);
    }
    fetchMaxDeath();
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
      <article className="article">
        <p>Highest Death in</p>
        <p>{maxDeath.length > 0 ? `${maxDeath[0].countryRegion} (${maxDeath[0].deaths})` : undefined}</p>
      </article>
    </div>
  );
};
