import React, {
  useEffect,
  useState,
} from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Papa from "papaparse";
import "../styles/waterQuality.css";

const COLORS = ["#0088FE", "#00C49F"];

function WaterQuality() {
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

  const flowData = data.map((d, i) => ({
    name: `Reading ${i + 1}`,
    Flow1: d["flow 1"],
    Flow2: d["flow 2"],
  }));

  const volumeData = [
    {
      name: "Total Volume 1",
      value: data.reduce(
        (acc, d) => acc + (d["volume 1"] || 0),
        0
      ),
    },
    {
      name: "Total Volume 2",
      value: data.reduce(
        (acc, d) => acc + (d["volume 2"] || 0),
        0
      ),
    },
  ];

  return (
    <div className="water-quality">
      <header className="water-header">
        <h1>Water Quality Dashboard</h1>
        <p>
          Real-time visualization of water purity
          parameters.
        </p>
      </header>

      <section className="quality-content">
        <h2>Parameters to Monitor</h2>
        <ul>
          <li>TDS (Total Dissolved Solids)</li>
          <li>pH Levels</li>
          <li>Temperature</li>
          <li>Contaminants</li>
        </ul>

        <div className="graph-section">
          <h3>Flow Comparison (ml/s)</h3>
          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <BarChart
              data={flowData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="Flow1"
                fill="#8884d8"
                name="Flow 1"
              />
              <Bar
                dataKey="Flow2"
                fill="#82ca9d"
                name="Flow 2"
              />
            </BarChart>
          </ResponsiveContainer>

          <h3>Water Volume Distribution (L)</h3>
          <ResponsiveContainer
            width="100%"
            height={300}
          >
            <PieChart>
              <Pie
                data={volumeData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {volumeData.map(
                  (entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        COLORS[
                          index % COLORS.length
                        ]
                      }
                    />
                  )
                )}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
}

export default WaterQuality;
