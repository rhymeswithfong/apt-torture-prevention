// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/waffle
import { ResponsiveWaffle } from "@nivo/waffle";
import { useTheme } from "@nivo/core";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveWaffle = ({ data }) => {
  const theme = useTheme();

  return (
    <ResponsiveWaffle
      data={data}
      theme={theme}
      total={196}
      rows={14}
      columns={14}
      fillDirection="bottom"
      padding={1}
      valueFormat=".2f"
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      colors={{ scheme: "tableau10" }}
      emptyOpacity={0.5}
      borderRadius={0}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.3]],
      }}
      motionStagger={2}
      // legends={[
      //   {
      //     anchor: "top-left",
      //     direction: "column",
      //     justify: false,
      //     translateX: -100,
      //     translateY: 0,
      //     itemsSpacing: 4,
      //     itemWidth: 100,
      //     itemHeight: 20,
      //     itemDirection: "left-to-right",
      //     itemOpacity: 1,
      //     itemTextColor: "#777",
      //     symbolSize: 20,
      //     effects: [
      //       {
      //         on: "hover",
      //         style: {
      //           itemTextColor: "#000",
      //           itemBackground: "#f7fafb",
      //         },
      //       },
      //     ],
      //   },
      // ]}
    />
  );
};

export default MyResponsiveWaffle;
