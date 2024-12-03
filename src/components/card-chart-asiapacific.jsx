import MyResponsiveHeatMapAsiaPacific from "./charts/heatmap-asiapacific";
import heatMapDataAsiaPacific from "../data/heatmap-asiapacific.json";

const CardChartAsiaPacific = () => {
  return (
    <div className="card-chart">
      <h3 className="heatmap-region">Countries in Asia-Pacific</h3>
      <div className="chart heatmap-asia-pacific">
        <MyResponsiveHeatMapAsiaPacific data={heatMapDataAsiaPacific} />
      </div>
    </div>
  );
};

export default CardChartAsiaPacific;
