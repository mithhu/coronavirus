import React, { useState, useEffect } from "react";

export const CountryData = props => {
  const [countryData, setCountryData] = useState({});
  useEffect(() => {
    async function fetchBdData() {
      const response = await fetch(
        "https://covid19.mathdro.id/api/countries/BD"
      ).then(res => res.json());
      setCountryData(response);
    }
    fetchBdData();
  }, []);
  return (
    <>
      <h3 style={{ textAlign: "center" }}>Bangladesh</h3>
      <div className="container">
        <article className="article">
          <p>Total Confirmed</p>
          <p>
            {countryData.confirmed ? countryData.confirmed.value : undefined}
          </p>
        </article>
        <article className="article">
          <p>Total Recovered</p>
          <p>
            {countryData.recovered ? countryData.recovered.value : undefined}
          </p>
        </article>
        <article className="article">
          <p>Total Death</p>
          <p>{countryData.deaths ? countryData.deaths.value : undefined}</p>
        </article>
      </div>
    </>
  );
};
