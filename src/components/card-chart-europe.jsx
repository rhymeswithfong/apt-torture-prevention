const CardChartEurope = () => {
  return (
    <div className="card-chart">
      <h3 className="heatmap-region">Countries in Europe</h3>
      <div className="chart heatmap-europe">
        <MyResponsiveHeatMapEurope data={heatMapDataEurope} />
      </div>
    </div>
  );
};

export default CardChartEurope;
