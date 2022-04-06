import Heading from "./Heading";
import HighScoreTitle from "./HighScoreTitle";
import ScoreTable from "./ScoreTable";
import allCountryScores from "./allCountryScores";

function App() {
  return (
    <>
      <Heading />
      <div>
        {allCountryScores.map((countryScore) => {
          return (
          <div>
            <HighScoreTitle country={countryScore.country} />
            <ScoreTable scores={countryScore.scores} />
          </div>)
        })}
      </div>
    </>
  );
}

export default App;
