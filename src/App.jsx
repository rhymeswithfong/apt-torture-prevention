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
      <nav className="navbar">
        <div className="title">Shaping the prevention of torture</div>
      </nav>
      <div className="wrapper">
        <div className="overview">
          <div className="card-info">
            <h1 className="heading">The building blocks for a better future</h1>
            <p className="description">
              This data visualization charts our global effort and commitment
              towards the prevention of torture over the past forty years from
              1984 to 2024.
            </p>
          </div>

          <div className="card-chart">
            <div className="chart waffle">
              <MyResponsiveWaffle data={waffleData} />
            </div>
          </div>

          <div className="card-summary">
            <div className="databox">
              <span className="category label">Type</span>
              <span className="count label">Count</span>
            </div>
            <div className="databox">
              <span className="category">
                How many countries are represented in the dataset?
              </span>
              <span className="count">196</span>
            </div>
            <div className="databox">
              <span className="category highlight">
                How many countries are committing to torture prevention
                measures?
              </span>
              <span className="count highlight">189</span>
            </div>
          </div>
        </div>

        <div className="framework">
          <div className="card-info">
            <h2 className="heading">A framework and system</h2>
            <p className="description">
              The Association for the Prevention of Torture has identified eight
              (8) key indicators that act as a criteria to measure the
              commitment of torture prevention across all five regions in the
              world. These measures are believed to form a solid basis for an
              effective prevention framework and system by recognizing the legal
              commitments made under international treaties and national
              legislations, in addition to the creation of oversight systems
              that help to monitor long-term progress.
            </p>
          </div>

          <div className="card-summary">
            <div className="databox">
              <span className="category label">Category</span>
              <span className="count label">TOTAL (BY COUNTRY)</span>
            </div>
            <div className="databox">
              <span className="category">International Treaties</span>
              <span className="count">82</span>
            </div>
            <div className="databox">
              <span className="category">National Legislation</span>
              <span className="count">22</span>
            </div>
            <div className="databox">
              <span className="category">Oversight Systems</span>
              <span className="count">40</span>
            </div>
          </div>
        </div>

        <div className="regions">
          <div className="card-info">
            <h2 className="heading">How are regions performing?</h2>
            <p className="description">
              A scoring system has been designed to calculate the performance of
              each region based on the key indicators used to measure torture
              prevention efforts. Each country can score a max. of 1 point per
              indicator and a total of 8 points for the overall score.
            </p>
          </div>

          <div className="card-chart">
            <div className="chart radar">
              {/* <MyResponsiveRadar data={radarData} /> */}
            </div>
          </div>

          <div className="card-summary">
            <div className="databox">
              <span className="category label">Rank (By Region)</span>
              <span className="count label">Overall Score</span>
            </div>
            <div className="databox">
              <span className="category highlight">Europe</span>
              <span className="count highlight">6.20</span>
            </div>
            <div className="databox">
              <span className="category">Africa</span>
              <span className="count">4.69</span>
            </div>
            <div className="databox">
              <span className="category">Americas</span>
              <span className="count">4.60</span>
            </div>
            <div className="databox">
              <span className="category">Middle East</span>
              <span className="count">4.25</span>
            </div>
            <div className="databox">
              <span className="category">Asia-Pacific</span>
              <span className="count">3.46</span>
            </div>
          </div>
        </div>

        <div className="countries">
          <div className="card-info">
            <h2 className="heading">How are countries performing?</h2>
            <p className="description">
              Explore the heatmap to see how each country within their
              respective regions are performing across all eight (8) indicators.
            </p>
          </div>

          <div className="card-summary">
            <div className="databox border-top">
              <span className="category highlight">
                How many countries have committed to all key indicators?
              </span>
              <span className="count highlight">8</span>
            </div>

            <div className="databox">
              <span className="category">Albania</span>
            </div>
            <div className="databox">
              <span className="category">Argentina</span>
            </div>
            <div className="databox">
              <span className="category">Croatia</span>
            </div>
            <div className="databox">
              <span className="category">Cyprus</span>
            </div>
            <div className="databox">
              <span className="category">Lithuania</span>
            </div>
            <div className="databox">
              <span className="category">Mauritania</span>
            </div>
            <div className="databox">
              <span className="category">New Zealand</span>
            </div>
            <div className="databox">
              <span className="category">Republic of Moldova</span>
            </div>
            <span className="footnote">by alphabetical order</span>
          </div>

          <div className="card-chart">
            <div className="chart heatmap-africa">
              {/* <MyResponsiveHeatMapAfrica data={heatMapDataAfrica} /> */}
            </div>
          </div>
          <div className="card-chart">
            <div className="chart heatmap-americas">
              {/* <MyResponsiveHeatMapAmericas data={heatMapDataAmericas} /> */}
            </div>
          </div>
          <div className="card-chart">
            <div className="chart heatmap-europe">
              {/* <MyResponsiveHeatMapEurope data={heatMapDataEurope} /> */}
            </div>
          </div>
          <div className="card-chart">
            <div className="chart heatmap-middle-east">
              {/* <MyResponsiveHeatMapMiddleEast data={heatMapDataMiddleEast} /> */}
            </div>
          </div>
          <div className="card-chart">
            <div className="chart heatmap-asia-pacific">
              {/* <MyResponsiveHeatMapAsiaPacific data={heatMapDataAsiaPacific} /> */}
            </div>
          </div>
        </div>

        <div className="time">
          <div className="card-info">
            <h2 className="heading">How is our progress over time?</h2>
            <p className="description">
              Take a look at our collective progress over the past forty years
              from 1984 to 2024.
            </p>
          </div>

          <div className="card-chart">
            <div className="chart swarm-plot">
              {/* <MyResponsiveSwarmPlot data={swarmPlotData} /> */}
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
