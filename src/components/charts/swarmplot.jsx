// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/swarmplot
import { ResponsiveSwarmPlot } from "@nivo/swarmplot";
import { useTheme } from "@nivo/core";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveSwarmPlot = ({ data }) => {
  const theme = useTheme();

  return (
    <ResponsiveSwarmPlot
      data={data}
      theme={theme}
      groups={[
        "UNCAT",
        "OPCAT",
        "Report",
        "Prohibition",
        "Criminalisation",
        "Designation",
        "Operationality",
        "Existence",
      ]}
      identity="id"
      value="year"
      valueFormat=" >-.1d"
      valueScale={{ type: "linear", min: 1984, max: 2024, reverse: false }}
      forceStrength={4}
      simulationIterations={100}
      colors={{ scheme: "tableau10" }}
      margin={{ top: 80, right: 100, bottom: 80, left: 100 }}
      axisTop={{
        orient: "top",
        tickSize: 10,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: "middle",
        legendOffset: -46,
        truncateTickAt: 0,
      }}
      axisRight={{
        orient: "right",
        tickSize: 10,
        tickPadding: 5,
        tickRotation: 0,
        legend: "year",
        legendPosition: "middle",
        legendOffset: 76,
        truncateTickAt: 0,
      }}
      axisBottom={{
        orient: "bottom",
        tickSize: 10,
        tickPadding: 5,
        tickRotation: 0,
        legendPosition: "middle",
        legendOffset: 46,
        truncateTickAt: 0,
      }}
      axisLeft={{
        orient: "left",
        tickSize: 10,
        tickPadding: 5,
        tickRotation: 0,
        legend: "year",
        legendPosition: "middle",
        legendOffset: -76,
        truncateTickAt: 0,
      }}
    />
  );
};

export default MyResponsiveSwarmPlot;
