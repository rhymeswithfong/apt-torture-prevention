import MyResponsiveHeatMapEurope from "./charts/heatmap-europe";
import heatMapDataEurope from "../data/heatmap-europe.json";

const CardChartEurope = () => {
  return (
    <div className="card-chart">
      <h3 className="heatmap-region">Countries in Europe</h3>
      <div className="chart heatmap-europe">
        {/* <MyResponsiveHeatMapEurope data={heatMapDataEurope} /> */}
      </div>
    </div>
  );
};

export default CardChartEurope;
