import React from "react";

function ScoreTable(props) {
  return (
    <table className="score-table">
      <tbody className="tbody">
        {props.scores.map((score, index) => {
          return (
            <tr key={index} className="table-row">
              <td className="name">{score.name}</td>
              <td className="score">{score.score}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ScoreTable;
