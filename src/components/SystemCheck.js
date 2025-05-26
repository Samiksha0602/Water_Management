import React, {
  useEffect,
  useState,
} from "react";
import Papa from "papaparse";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import "../styles/systemCheck.css";

const SystemCheck = () => {
  const [data, setData] = useState([]);

  const dataFile =
    process.env.PUBLIC_URL + "/data.csv";

  useEffect(() => {
    fetch(dataFile)
      .then((response) => response.text())
      .then((csvText) => {
        const parsed = Papa.parse(csvText, {
          header: true,
          dynamicTyping: true,
        });
        setData(parsed.data);
      });
  }, []);

  const status = data[0] || {};

  const flowDiffData = data.map((d, i) => ({
    name: `Reading ${i + 1}`,
    Diff: Math.abs(
      (d["flow 1"] || 0) - (d["flow 2"] || 0)
    ),
  }));

  const tankData = [
    {
      name: "Volume 1",
      value: status["volume 1"] || 0,
    },
    {
      name: "Volume 2",
      value: status["volume 2"] || 0,
    },
  ];

  return (
    <div className="system-check">
      <h1>System Status Overview</h1>

      <div className="status-cards">
        <div className="status-card alert">
          <h2>Leakage Alert</h2>
          <p>
            {Math.abs(
              status["flow 1"] - status["flow 2"]
            ) > 30
              ? "Leakage Detected!"
              : "No Leakage Detected."}
          </p>
        </div>
        <div className="status-card tank">
          <h2>Tank Status</h2>
          <p>
            {status.distance < 6
              ? "Water Tank Low/Empty!"
              : "Water Tank Sufficient."}
          </p>
        </div>
      </div>

      <div className="charts-container">
        <h2>Flow Difference Visualization</h2>
        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <BarChart data={flowDiffData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Diff" fill="#FF8042" />
          </BarChart>
        </ResponsiveContainer>

        <h2>Tank Volume Pie Chart</h2>
        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <PieChart>
            <Pie
              data={tankData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              <Cell fill="#8884d8" />
              <Cell fill="#82ca9d" />
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SystemCheck;
