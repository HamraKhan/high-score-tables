import Heading from "./Heading";
import HighScoreTitle from "./HighScoreTitle";
import ScoreTable from "./ScoreTable";

function App() {
  const scores = [
    { n: "rahman", s: 700200 },
    { n: "rayhan", s: 18238123 },
    { n: "ali", s: 5400000 },
  ];
  
  return (
    <>
      <Heading />
      <div>
        <HighScoreTitle country={'Bangladesh'}/>
        <ScoreTable scores={scores}/>
      </div>
    </>
  );
}

export default App;
