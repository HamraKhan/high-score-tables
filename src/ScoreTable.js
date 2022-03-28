import React from "react";

function ScoreTable(props) {

  return (
    <table>
      <tbody>
        {props.scores.map((score, index) => {
          return (
            <tr key={index}>
              <td>{score.n}</td>
              <td>{score.s}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ScoreTable;
