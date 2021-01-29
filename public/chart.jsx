import React, { useState, useEffect } from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import api from "./api/api";

function Chart() {
  const [data, setData] = useState({});
  const [confirmed, setConfirmed] = useState(0);

  useEffect(() => {
    async function getData() {
      let chart_data = await api.getChartData();
      setData(chart_data);

      let lastObj = chart_data["daily"][chart_data["daily"].length - 1];
      setConfirmed(lastObj["confirmed"]);
    }

    getData();
  }, []);

  return (
    <div className="chart">
      <LineChart
        width={1720}
        height={600}
        data={data["daily"]}
        margin={{ top: 5, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis
          dataKey="confirmed"
          type="number"
          domain={[0, parseInt(confirmed) + 5]}
        />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="confirmed" stroke="#8884d8" />
        <Line type="monotone" dataKey="recovered" stroke="#82ca9d" />
        <Line type="monotone" dataKey="deceased" stroke="#000000" />
        <Line type="monotone" dataKey="critical" stroke="#de1738" />
      </LineChart>
    </div>
  );
}

export default Chart;
