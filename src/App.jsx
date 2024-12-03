import { useState } from "react";
import { ThemeProvider } from "@nivo/core";
import theme from "./components/theme/default.js";
import MyResponsiveRadar from "./components/charts/radar.jsx";
import MyResponsiveWaffle from "./components/charts/waffle.jsx";
import MyResponsiveSwarmPlot from "./components/charts/swarmplot.jsx";
import CardSummary from "./components/card-summary.jsx";
import CardChartAfrica from "./components/card-chart-africa.jsx";
import CardChartAmericas from "./components/card-chart-americas.jsx";
import CardChartEurope from "./components/card-chart-europe.jsx";
import CardChartMiddleEast from "./components/card-chart-middleeast.jsx";
import CardChartAsiaPacific from "./components/card-chart-asiapacific.jsx";
import radarData from "./data/radar.json";
import waffleData from "./data/waffle.json";
import swarmPlotData from "./data/swarmplot.json";
import "./App.css";

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabIndex = (index) => {
    return () => setTabIndex(index);
  };

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
              Torture still exists in many countries both in times of war and
              peace. Often, it targets the most vulnerable and marginalized
              groups who suffer grievous violations to their humanity and
              dignity. This data visualization charts our global effort and
              commitment towards the prevention of torture over the past forty
              years from 1984 to 2024.
            </p>
          </div>

          <div className="card-chart">
            <div className="chart waffle">
              {/* <MyResponsiveWaffle data={waffleData} /> */}
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
                How many countries have started implementing prevention
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
              (8) key indicators that act as a criteria to measure torture
              prevention efforts around the world. The measures are believed to
              form a solid basis for an effective framework and system that
              recognizes legal commitments made under international treaties and
              national legislations, in addition to the creation of oversight
              systems to help monitor long-term progress.
            </p>
          </div>

          <div className="card-summary legal-rank">
            <div className="databox">
              <span className="category label">Category</span>
              <span className="count label">TOTAL (BY COUNTRY)</span>
            </div>
            <div className="databox">
              <span className="category highlight">International Treaties</span>
              <span className="count highlight">82</span>
            </div>
            <div className="databox">
              <span className="category highlight">National Legislation</span>
              <span className="count highlight">22</span>
            </div>
            <div className="databox">
              <span className="category highlight">Oversight Systems</span>
              <span className="count highlight">40</span>
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
            <CardSummary />
          </div>

          <div className="tabs">
            <div className="tab-africa">
              <span onClick={handleTabIndex(0)}>Africa</span>
            </div>
            <div className="tab-americas">
              <span onClick={handleTabIndex(1)}>Americas</span>
            </div>
            <div className="tab-europe">
              <span onClick={handleTabIndex(2)}>Europe</span>
            </div>
            <div className="tab-middleeast">
              <span onClick={handleTabIndex(3)}>Middle East</span>
            </div>
            <div className="tab-asiapacific">
              <span onClick={handleTabIndex(4)}>Asia Pacific</span>
            </div>
          </div>

          {tabIndex === 0 ? <CardChartAfrica /> : null}
          {tabIndex === 1 ? <CardChartAmericas /> : null}
          {tabIndex === 2 ? <CardChartEurope /> : null}
          {tabIndex === 3 ? <CardChartMiddleEast /> : null}
          {tabIndex === 4 ? <CardChartAsiaPacific /> : null}
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
              <MyResponsiveSwarmPlot data={swarmPlotData} />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
