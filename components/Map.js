import React, { useState, useEffect } from "react";
import "./Map.scss";

import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  Legend,
  Line
} from "recharts";
import { CardList } from "./CardList";
import { CountryData } from "./CountryData";

const SimpleExample = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://covid19.mathdro.id/api/daily"
      ).then(res => res.json());
      setDailyData(response);
    }
    fetchData();
  }, []);

  let newData = [];
  const dataCollector = () => {
    let count = 1;
    for (let i = dailyData.length - 7; count < 8; i++, count++) {
      console.log(dailyData[i]);
      newData.push(dailyData[i]);
    }
  };

  dataCollector();
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Covid-19</h1>
      <CardList
        dailyData={
          dailyData.length > 0 && dailyData[dailyData.length - 1].deltaConfirmed
        }
      />
      <CountryData />
      <div className="chart">
        <AreaChart
          width={760}
          height={300}
          data={newData}
          margin={{ top: 10, right: 50, left: 20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF0000" stopOpacity={1} />
              <stop offset="95%" stopColor="#FF0000" stopOpacity={0.2} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0CE30C" stopOpacity={1} />
              <stop offset="95%" stopColor="#0CE30C" stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <XAxis dataKey="reportDateString" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line
            name="Confirmed cases"
            type="monotone"
            dataKey="totalConfirmed"
            stroke="#8884dFF00008"
          />
          <Line
            name="Recovered"
            type="monotone"
            dataKey="totalRecovered"
            stroke="#0CE30C"
          />
          <Area
            type="monotone"
            dataKey="totalConfirmed"
            stroke="#FF0000"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="totalRecovered"
            stroke="#0CE30C"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default SimpleExample;
