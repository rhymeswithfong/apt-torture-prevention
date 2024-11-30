import { ResponsiveRadar } from "@nivo/radar";
import { useTheme } from "@nivo/core";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveRadar = ({ data }) => {
  const theme = useTheme();

  return (
    <ResponsiveRadar
      data={data}
      theme={theme}
      keys={["Africa", "Americas", "Europe", "Middle East", "Asia-Pacific"]}
      indexBy="indicator"
      valueFormat=">-.2f"
      margin={{ top: 70, right: 80, bottom: 70, left: 80 }}
      borderColor={{ from: "color" }}
      gridLabelOffset={36}
      gridLevels={10}
      dotSize={5}
      dotColor={{ theme: "background" }}
      dotBorderWidth={1}
      colors={{ scheme: "tableau10" }}
      blendMode="normal"
      motionConfig="wobbly"
      // legends={[
      //   {
      //     anchor: "top-left",
      //     direction: "column",
      //     translateX: -50,
      //     translateY: -40,
      //     itemWidth: 80,
      //     itemHeight: 20,
      //     itemTextColor: "#999",
      //     symbolSize: 12,
      //     symbolShape: "circle",
      //     effects: [
      //       {
      //         on: "hover",
      //         style: {
      //           itemTextColor: "#000",
      //         },
      //       },
      //     ],
      //   },
      // ]}
    />
  );
};

export default MyResponsiveRadar;
