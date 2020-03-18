import React, { useState, useEffect } from "react";

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

const SimpleExample = () => {
  const [dailyData, setDailyData] = useState([]);
  const [totalData, setTotalData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://covid19.mathdro.id/api/daily"
      ).then(res => res.json());
      setDailyData(response);
    }
    fetchData();
    async function fetchInfo() {
      const response = await fetch(
        "https://covid19.mathdro.id/api/"
      ).then(res => res.json());
      setTotalData(response);
    }
    fetchInfo();
  }, []);

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
      <div>
        <article>
          <p>
            Total Confirmed:{" "}
            {totalData.confirmed ? totalData.confirmed.value : undefined}
          </p>
        </article>
        <article>
          <p>
            Total Recovered:{" "}
            {totalData.recovered ? totalData.recovered.value : undefined}
          </p>
        </article>
        <article>
          <p>
            Total Death: {totalData.deaths ? totalData.deaths.value : undefined}
          </p>
        </article>
        <article>
          <p>
            Confirmed Today:{" "}
            {dailyData.length > 0
              ? dailyData[dailyData.length - 1].deltaConfirmed
              : undefined}
          </p>
        </article>
      </div>
      <AreaChart
        width={730}
        height={300}
        data={newData}
        margin={{ top: 10, right: 30, left: 20, bottom: 0 }}
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
        <YAxis
          label={{
            value: "Total no. of cases",
            angle: -90,
            position: "insideBottomLeft"
          }}
        />
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
  );
};

export default SimpleExample;
