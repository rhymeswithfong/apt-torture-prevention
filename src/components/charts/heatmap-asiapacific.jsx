// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/heatmap
import { ResponsiveHeatMap } from "@nivo/heatmap";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveHeatMapAsiaPacific = ({ data }) => (
  <ResponsiveHeatMap
    data={data}
    margin={{ top: 60, right: 90, bottom: 60, left: 90 }}
    valueFormat=">-.1r"
    axisTop={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: -90,
      legend: "",
      legendOffset: 46,
      truncateTickAt: 0,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      // legend: "country",
      legendPosition: "middle",
      legendOffset: -72,
      truncateTickAt: 0,
    }}
    colors={{
      type: "quantize",
      scheme: "greens",
      minValue: -100000,
      maxValue: 100000,
      steps: 7,
    }}
    emptyColor="#555555"
    borderWidth={1}
    borderColor={{ theme: "grid.line.stroke" }}
    labelTextColor={{
      from: "color",
      modifiers: [["brighter", 3]],
    }}
    // legends={[
    //   {
    //     anchor: "bottom",
    //     translateX: 0,
    //     translateY: 30,
    //     length: 400,
    //     thickness: 8,
    //     direction: "row",
    //     tickPosition: "after",
    //     tickSize: 3,
    //     tickSpacing: 4,
    //     tickOverlap: false,
    //     tickFormat: ">-.1r",
    //     title: "Value →",
    //     titleAlign: "start",
    //     titleOffset: 4,
    //   },
    // ]}
  />
);

export default MyResponsiveHeatMapAsiaPacific;