import MyResponsiveHeatMapAfrica from "./charts/heatmap-africa";
import heatMapDataAfrica from "../data/heatmap-africa.json";

const CardChartAfrica = () => {
  return (
    <div className="card-chart">
      <h3 className="heatmap-region">Countries in Africa</h3>
      <div className="chart heatmap-africa">
        {/* <MyResponsiveHeatMapAfrica data={heatMapDataAfrica} /> */}
      </div>
    </div>
  );
};

export default CardChartAfrica;
