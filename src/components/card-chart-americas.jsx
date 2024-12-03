import MyResponsiveHeatMapAmericas from "./charts/heatmap-americas";
import heatMapDataAmericas from "../data/heatmap-americas.json";

const CardChartAmericas = () => {
  return (
    <div className="card-chart">
      <h3 className="heatmap-region">Countries in the Americas</h3>
      <div className="chart heatmap-americas">
        {/* <MyResponsiveHeatMapAmericas data={heatMapDataAmericas} /> */}
      </div>
    </div>
  );
};

export default CardChartAmericas;
