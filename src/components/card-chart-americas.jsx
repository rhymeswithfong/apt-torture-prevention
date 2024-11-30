const CardChartAmericas = () => {
  return (
    <div className="card-chart">
      <h3 className="heatmap-region">Countries in the Americas</h3>
      <div className="chart heatmap-americas">
        <MyResponsiveHeatMapAmericas data={heatMapDataAmericas} />
      </div>
    </div>
  );
};

export default CardChartAmericas;
