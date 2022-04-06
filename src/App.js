import Heading from "./Heading";
import HighScoreTitle from "./HighScoreTitle";
import ScoreTable from "./ScoreTable";
import allCountryScores from "./allCountryScores";

function App() {
  return (
    <>
      <Heading />
      <div className="score-table-container">
        {allCountryScores.map((countryScore) => {
          return (
          <div className="country-score-container">
            <HighScoreTitle country={countryScore.country} />
            <ScoreTable scores={countryScore.scores} />
          </div>)
        })}
      </div>
    </>
  );
}

export default App;
