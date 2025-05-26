// import React from "react";
// import "../styles/home.css";

// function Home() {
//   return (
//     <div className="home">
//       <header className="hero">
//         <h1>Water Management System</h1>
//         <p>
//           Efficient solutions for water
//           conservation and smart usage.
//         </p>
//         <button className="cta-button">
//           Learn More
//         </button>
//       </header>

//       <section className="content">
//         <h2>Why Water Management Matters?</h2>
//         <p>
//           Water conservation is essential for
//           sustainable living. Our platform helps
//           you track, analyze, and optimize water
//           usage.
//         </p>

//         <div className="media-space">
//           [Add Images/Videos Here]
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;

// import React, {
//   useEffect,
//   useState,
// } from "react";
// import Papa from "papaparse";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import "../styles/home.css";

// // Register Chart.js components.
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// function Home() {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     // Fetch the CSV file from the public folder.
//     fetch("/data.csv")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(
//             `Network response was not OK (status: ${response.status})`
//           );
//         }
//         return response.text();
//       })
//       .then((csvData) => {
//         // If your data is tab-delimited, specify the delimiter.
//         Papa.parse(csvData, {
//           delimiter: ",", // Use "\t" if your file is tab-separated.
//           header: true,
//           dynamicTyping: true,
//           skipEmptyLines: true,
//           complete: (results) => {
//             if (results.errors.length) {
//               setError(
//                 "CSV Parsing Error: " +
//                   results.errors[0].message
//               );
//             } else {
//               setData(results.data);
//             }
//           },
//         });
//       })
//       .catch((err) => {
//         setError(
//           "Error loading CSV: " + err.message
//         );
//       });
//   }, []);

//   // Prepare chart data if available.
//   const chartData = {
//     labels: data.map((row) => row.distance),
//     datasets: [
//       {
//         label: "Flow 1 (ml/s)",
//         data: data.map((row) => row["flow 1"]),
//         backgroundColor: "rgba(0, 123, 255, 0.6)",
//       },
//       {
//         label: "Flow 2 (ml/s)",
//         data: data.map((row) => row["flow 2"]),
//         backgroundColor: "rgba(0, 198, 255, 0.6)",
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Live Sensor Data Overview",
//       },
//     },
//   };

//   return (
//     <div className="home">
//       <header className="hero">
//         <h1>Water Management System</h1>
//         <p>
//           Efficient solutions for water
//           conservation and smart usage.
//         </p>
//       </header>

//       <section className="content">
//         <h2>Live Sensor Data Overview</h2>

//         {error && (
//           <p style={{ color: "red" }}>{error}</p>
//         )}

//         {data.length > 0 ? (
//           <>
//             {/* Bar Chart */}
//             <div className="chart-container">
//               <Bar
//                 data={chartData}
//                 options={options}
//               />
//             </div>

//             {/* Data Card */}
//             <div className="data-card">
//               <p>
//                 <strong>Distance:</strong>{" "}
//                 {data[0].distance}
//               </p>
//               <p>
//                 <strong>Motor:</strong>{" "}
//                 {data[0].motor === 1
//                   ? "ON"
//                   : "OFF"}
//               </p>
//               <p>
//                 <strong>Valve:</strong>{" "}
//                 {data[0].valve === 1
//                   ? "OPEN"
//                   : "CLOSE"}
//               </p>
//               <p>
//                 <strong>Volume 1:</strong>{" "}
//                 {data[0]["volume 1"]} L
//               </p>
//               <p>
//                 <strong>Volume 2:</strong>{" "}
//                 {data[0]["volume 2"]} L
//               </p>
//               <p>
//                 <strong>Average:</strong>{" "}
//                 {data[0].avg} L
//               </p>
//               <p>
//                 <strong>TDS:</strong>{" "}
//                 {data[0].tds} ppm
//               </p>
//             </div>

//             {/* Data Table */}
//             <div className="data-table">
//               <h3>Raw Sensor Data</h3>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Distance</th>
//                     <th>Motor</th>
//                     <th>Valve</th>
//                     <th>Flow 1 (ml/s)</th>
//                     <th>Flow 2 (ml/s)</th>
//                     <th>Volume 1 (L)</th>
//                     <th>Volume 2 (L)</th>
//                     <th>Average (L)</th>
//                     <th>TDS (ppm)</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {data.map((row, idx) => (
//                     <tr key={idx}>
//                       <td>{row.distance}</td>
//                       <td>{row.motor}</td>
//                       <td>{row.valve}</td>
//                       <td>{row["flow 1"]}</td>
//                       <td>{row["flow 2"]}</td>
//                       <td>{row["volume 1"]}</td>
//                       <td>{row["volume 2"]}</td>
//                       <td>{row.avg}</td>
//                       <td>{row.tds}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </>
//         ) : (
//           !error && <p>Loading sensor data...</p>
//         )}
//       </section>

//       <section className="content">
//         <h2>Why Water Management Matters?</h2>
//         <p>
//           Water conservation is essential for
//           sustainable living. Our platform helps
//           you track, analyze, and optimize water
//           usage.
//         </p>
//         <div className="media-space">
//           [Add Images/Videos Here]
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;

import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Smart Water Management Dashboard</h1>
      <p>
        Select a module to view detailed insights:
      </p>

      <div className="home-cards">
        <Link
          to="/system-check"
          className="home-card system"
        >
          <h2>System Check</h2>
          <p>
            Check leakage, tank levels, flow, and
            motor status.
          </p>
        </Link>

        <Link
          to="/water-quality"
          className="home-card quality"
        >
          <h2>Water Quality</h2>
          <p>
            Monitor TDS, contaminants, and water
            purity metrics.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
