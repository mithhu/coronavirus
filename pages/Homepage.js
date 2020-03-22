import React, { useState, useEffect } from "react";
import { CountryData } from "../components/CountryData";
import { Chart } from "../components/Chart";
import { GlobalData } from "../components/GlobalData";

const Homepage = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    //gets data of previous days
    async function fetchData() {
      const response = await fetch(
        "https://covid19.mathdro.id/api/daily"
      ).then(res => res.json());
      setDailyData(response);
    }
    fetchData();
  }, []);

  //filter last 7 days data for the chart
  let newData = [];
  const dataCollector = () => {
    let count = 1;
    for (let i = dailyData.length - 7; count < 8; i++, count++) {
      newData.push(dailyData[i]);
    }
  };
  dataCollector();

  return (
    <div>
      <h1 className="headline">Covid-19</h1>
      <GlobalData
        dailyData={
          dailyData.length > 0 && dailyData[dailyData.length - 1].deltaConfirmed
        }
      />
      <CountryData />
      <Chart newData={newData} />
    </div>
  );
};

export default Homepage;
