import MyResponsiveHeatMapMiddleEast from "./charts/heatmap-middleeast";
import heatMapDataMiddleEast from "../data/heatmap-middleeast.json";

const CardChartMiddleEast = () => {
  return (
    <div className="card-chart">
      <h3 className="heatmap-region">Countries in the Middle East</h3>
      <div className="chart heatmap-middle-east">
        {/* <MyResponsiveHeatMapMiddleEast data={heatMapDataMiddleEast} /> */}
      </div>
    </div>
  );
};

export default CardChartMiddleEast;
