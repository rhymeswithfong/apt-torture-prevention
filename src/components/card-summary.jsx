const CardSummary = () => {
  return (
    <div className="card-summary top-countries">
      <div className="databox">
        <span className="category label">Country</span>
        <span className="count label">Status</span>
      </div>
      <div className="databox">
        <span className="category">Albania</span>
        <span className="status">Full Implementation</span>
      </div>
      <div className="databox">
        <span className="category">Argentina</span>
        <span className="status">Full Implementation</span>
      </div>
      <div className="databox">
        <span className="category">Croatia</span>
        <span className="status">Full Implementation</span>
      </div>
      <div className="databox">
        <span className="category">Cyprus</span>
        <span className="status">Full Implementation</span>
      </div>
      <div className="databox">
        <span className="category">Lithuania</span>
        <span className="status">Full Implementation</span>
      </div>
      <div className="databox">
        <span className="category">Mauritania</span>
        <span className="status">Full Implementation</span>
      </div>
      <div className="databox">
        <span className="category">New Zealand</span>
        <span className="status">Full Implementation</span>
      </div>
      <div className="databox">
        <span className="category">Republic of Moldova</span>
        <span className="status">Full Implementation</span>
      </div>
      <div className="databox">
        <span className="category highlight">
          How many countries have committed to all key indicators?
        </span>
        <span className="count highlight">8</span>
      </div>
      <span className="footnote">by alphabetical order</span>
    </div>
  );
};

export default CardSummary;
