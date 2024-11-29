import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import MyResponsiveRadar from "./components/charts/radar.jsx";
import MyResponsiveWaffle from "./components/charts/waffle.jsx";
import MyResponsiveHeatMapAfrica from "./components/charts/heatmap-africa.jsx";
import MyResponsiveHeatMapAmericas from "./components/charts/heatmap-americas.jsx";
import MyResponsiveHeatMapEurope from "./components/charts/heatmap-europe.jsx";
import MyResponsiveHeatMapMiddleEast from "./components/charts/heatmap-middleeast.jsx";
import MyResponsiveHeatMapAsiaPacific from "./components/charts/heatmap-asiapacific.jsx";
import MyResponsiveSwarmPlot from "./components/charts/swarmplot.jsx";
import radarData from "./data/radar.json";
import waffleData from "./data/waffle.json";
import heatMapDataAfrica from "./data/heatmap-africa.json";
import heatMapDataAmericas from "./data/heatmap-americas.json";
import heatMapDataEurope from "./data/heatmap-europe.json";
import heatMapDataMiddleEast from "./data/heatmap-middleeast.json";
import heatMapDataAsiaPacific from "./data/heatmap-asiapacific.json";
import swarmPlotData from "./data/swarmplot.json";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> */}
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
        <div
          style={{ height: "300px", width: "800px", backgroundColor: "white" }}
        >
          <MyResponsiveWaffle data={waffleData} />
        </div>

        <div
          style={{ height: "500px", width: "800px", backgroundColor: "white" }}
        >
          <MyResponsiveRadar data={radarData} />
        </div>

        <div
          style={{ height: "1200px", width: "800px", backgroundColor: "white" }}
        >
          <MyResponsiveHeatMapAfrica data={heatMapDataAfrica} />
        </div>

        <div
          style={{ height: "900px", width: "800px", backgroundColor: "white" }}
        >
          <MyResponsiveHeatMapAmericas data={heatMapDataAmericas} />
        </div>

        <div
          style={{ height: "1100px", width: "800px", backgroundColor: "white" }}
        >
          <MyResponsiveHeatMapEurope data={heatMapDataEurope} />
        </div>

        <div
          style={{ height: "500px", width: "800px", backgroundColor: "white" }}
        >
          <MyResponsiveHeatMapMiddleEast data={heatMapDataMiddleEast} />
        </div>

        <div
          style={{ height: "1000px", width: "800px", backgroundColor: "white" }}
        >
          <MyResponsiveHeatMapAsiaPacific data={heatMapDataAsiaPacific} />
        </div>

        <div
          style={{ height: "500px", width: "800px", backgroundColor: "white" }}
        >
          <MyResponsiveSwarmPlot data={swarmPlotData} />
        </div>
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
