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
        <div className="title">Torture Prevention Framework</div>
      </nav>
      <div className="wrapper-overview">
        <div className="overview">
          <div className="card-info">
            <h1 className="heading">
              A Global Effort: Shaping Torture Prevention Over 40 Years
            </h1>
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
                How many countries are taking prevention measures?
              </span>
              <span className="count highlight">189</span>
            </div>
            <span className="footnote">last updated on Dec 2024</span>
          </div>
        </div>
      </div>

      <div className="wrapper-framework">
        <div className="framework">
          <div className="card-info">
            <h2 className="heading">A framework and system</h2>
            <p className="description">
              The Association for the Prevention of Torture has identified eight
              (8) key indicators that act as a criteria to measure prevention
              efforts around the world. The measures are believed to form a
              solid basis for an effective framework and system that recognizes
              legal commitments made under international treaties and national
              legislations, in addition to the creation of oversight systems to
              help monitor long-term commitment. Take a look at our collective
              performance (i.e. how many countries are taking action) in each
              category:
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

          <div className="button">
            <a
              href="https://docs.google.com/spreadsheets/d/1-5QZwkHjRrgKrJiW8ZmNhO9-iAScpajM/edit?usp=sharing&ouid=114806590847645480101&rtpof=true&sd=true"
              target="_blank"
            >
              See definitions
            </a>
          </div>
        </div>
      </div>

      <div className="wrapper-regions">
        <div className="regions">
          <div className="card-info">
            <h2 className="heading">How is each region performing?</h2>
            <p className="description">
              A scoring system has been designed to calculate the performance of
              each region based on the key indicators used to measure torture
              prevention efforts. Each country can score a max. of 1 point per
              indicator and a total of 8 points for the overall score.
            </p>
          </div>

          <div className="card-chart">
            <div className="chart radar">
              <MyResponsiveRadar data={radarData} />
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
          <div className="button">
            <a
              href="https://docs.google.com/document/d/1jfM9rAcCAg0kfxN7wHv0QooO_oJzRSt6EJoJrf-GrjE/edit?usp=sharing"
              target="_blank"
            >
              See method
            </a>
          </div>
        </div>
      </div>

      <div className="wrapper-countries">
        <div className="wrapper-countries-summary">
          <div className="card-info">
            <h2 className="heading">How is each country performing?</h2>
            <p className="description">
              A country has achieved a "full implementation" status if it has
              committed to all eight (8) key indicators. Here are the top
              performing countries based on this measure:
            </p>
            <CardSummary />
          </div>
        </div>

        <div className="wrapper-countries-chart">
          <div className="countries">
            <div className="card-info">
              <h2 className="heading">Take a deeper dive into the dataset</h2>
              <p className="description">
                Explore the heatmap to see how each country within their
                respective regions are performing across all eight (8)
                indicators.
              </p>
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
            </div>

            {tabIndex === 0 ? <CardChartAfrica /> : null}
            {tabIndex === 1 ? <CardChartAmericas /> : null}
            {tabIndex === 2 ? <CardChartEurope /> : null}
            {tabIndex === 3 ? <CardChartMiddleEast /> : null}
            {tabIndex === 4 ? <CardChartAsiaPacific /> : null}
          </div>
        </div>
      </div>

      <div className="wrapper-time">
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

      <div className="wrapper-footnote">
        <span className="footnote">
          This project was created for Viz for Social Good by Phuong Diep on Dec
          2024.
        </span>
      </div>
    </ThemeProvider>
  );
}

export default App;
