import React, { useState, useEffect } from "react";

export const CountryData = props => {
  const [countryData, setCountryData] = useState({});
  const [globalData, setGlobalData] = useState([]);
  const [selectCountry, setSelectCountry] = useState("BD");

  useEffect(() => {
    async function fetchCountryData() {
      const response = await fetch(
        `https://covid19.mathdro.id/api/countries/${selectCountry}`
      ).then(res => res.json());
      setCountryData(response);
    }
    fetchCountryData();
    async function fetchGlobalData() {
      const response = await fetch(
        "https://covid19.mathdro.id/api/countries"
      ).then(res => res.json());
      setGlobalData(response);
    }
    fetchGlobalData();
  }, [selectCountry]);
  return (
    <>
      <h3 style={{ textAlign: "center", marginBottom: "10px" }}>
        Select your country
      </h3>
      <div style={{ textAlign: "center", marginBottom: "5px", width: "100%" }}>
        <select
          className="center-block"
          value={selectCountry}
          onChange={e => setSelectCountry(e.target.value)}
          style={{
            backgroundColor: "#c3f4e7",
            width: "250px",
            border: "none",
            textDecoration: "none",
            height: "30px",
            borderRadius: "5px"
          }}
        >
          {globalData.countries
            ? Object.keys(globalData.countries).map(country => {
                return (
                  <option key={country} value={globalData.countries[country]}>
                    {country}
                  </option>
                );
              })
            : undefined}
        </select>
      </div>
      <div className="container">
        <article className="article">
          <p>Total Confirmed</p>
          <p>
            {countryData.confirmed
              ? countryData.confirmed.value
              : "No Data Found"}
          </p>
        </article>
        <article className="article">
          <p>Total Recovered</p>
          <p>
            {countryData.recovered
              ? countryData.recovered.value
              : "No Data Found"}
          </p>
        </article>
        <article className="article">
          <p>Total Death</p>
          <p>
            {countryData.deaths ? countryData.deaths.value : "No Data Found"}
          </p>
        </article>
      </div>
    </>
  );
};
