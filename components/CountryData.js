import React, { useState, useEffect } from "react";
import "./ChartCardList.scss";

export const CountryData = props => {
  const [countryData, setCountryData] = useState({});
  const [globalData, setGlobalData] = useState([]);
  const [selectCountry, setSelectCountry] = useState("");
  const [population, setPopulation] = useState(0);

  useEffect(() => {
    async function fetchGlobalData() {
      const response = await fetch(
        "https://covid19.mathdro.id/api/countries"
      ).then(res => res.json());
      console.log(response);
      setGlobalData(response);
    }
    fetchGlobalData();
    setSelectCountry(
      localStorage.getItem("selectCountry")
        ? localStorage.getItem("selectCountry")
        : ""
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("selectCountry", selectCountry);

    async function fetchPopulation() {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/alpha/${selectCountry}`
      ).then(res => res.json());
      setPopulation(response.population);
    }
    async function fetchCountryData() {
      const response = await fetch(
        `https://covid19.mathdro.id/api/countries/${selectCountry}`
      ).then(res => res.json());
      setCountryData(response);
    }
    if (selectCountry) {
      fetchCountryData();
      fetchPopulation();
    }
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
          onChange={e => {
            setSelectCountry(e.target.value);
          }}
          style={{
            backgroundColor: "#c3f4e7",
            width: "250px",
            border: "none",
            textDecoration: "none",
            height: "30px",
            borderRadius: "5px"
          }}
        >
          <option value="">Select your country</option>
          {globalData.countries
            ? globalData.countries.map(country => {
                return (
                  <option key={country.iso2} value={country.iso2}>
                    {country.name}
                  </option>
                );
              })
            : undefined}
        </select>
      </div>
      {selectCountry && (
        <div className="container">
          <article className="article">
            <p>Total Confirmed</p>
            {population && countryData.confirmed ? (
              <>
                <span>{countryData.confirmed.value}</span>
                <span>
                  (
                  {((countryData.confirmed.value / population) * 100).toFixed(
                    7
                  )}
                  %)
                </span>
              </>
            ) : (
              "No Data Found"
            )}
          </article>
          <article className="article">
            <p>Total Recovered</p>
            {population && countryData.recovered ? (
              <>
                <span>{countryData.recovered.value}</span>
                <span>
                  (
                  {(
                    (countryData.recovered.value /
                      countryData.confirmed.value) *
                    100
                  ).toFixed(2)}
                  %)
                </span>
              </>
            ) : (
              "No Data Found"
            )}
          </article>
          <article className="article">
            <p>Total Death</p>
            {population && countryData.deaths ? (
              <>
                <span>{countryData.deaths.value}</span>
                <span>
                  (
                  {(
                    (countryData.deaths.value / countryData.confirmed.value) *
                    100
                  ).toFixed(2)}
                  %)
                </span>
              </>
            ) : (
              "No Data Found"
            )}
          </article>
        </div>
      )}
    </>
  );
};
