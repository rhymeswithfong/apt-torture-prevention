import { useState } from "react";
import { ThemeProvider } from "@nivo/core";
import theme from "./components/theme/default.js";
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
    <ThemeProvider theme={theme}>
      <div className="wrapper">
        <div className="card header">
          <h1 className="heading">My Project</h1>
          <p className="description">
            Welcome to my project dashboard. Here you will find visual
            representations of data using various chart types like radar,
            waffle, and heatmaps showcasing insights across different regions.
            Explore the data to uncover trends and enhance your decision-making
            process.
          </p>
        </div>
        <div className="card">
          <div className="chart waffle">
            <MyResponsiveWaffle data={waffleData} />
          </div>
        </div>
        <div className="card">
          <div className="chart radar">
            <MyResponsiveRadar data={radarData} />
          </div>
        </div>
        <div className="card">
          <div className="chart heatmap-africa">
            <MyResponsiveHeatMapAfrica data={heatMapDataAfrica} />
          </div>
        </div>
        <div className="card">
          <div className="chart heatmap-americas">
            <MyResponsiveHeatMapAmericas data={heatMapDataAmericas} />
          </div>
        </div>
        <div className="card">
          <div className="chart heatmap-europe">
            <MyResponsiveHeatMapEurope data={heatMapDataEurope} />
          </div>
        </div>
        <div className="card">
          <div className="chart heatmap-middle-east">
            <MyResponsiveHeatMapMiddleEast data={heatMapDataMiddleEast} />
          </div>
        </div>
        <div className="card">
          <div className="chart heatmap-asia-pacific">
            <MyResponsiveHeatMapAsiaPacific data={heatMapDataAsiaPacific} />
          </div>
        </div>
        <div className="card">
          <div className="chart swarm-plot">
            <MyResponsiveSwarmPlot data={swarmPlotData} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
