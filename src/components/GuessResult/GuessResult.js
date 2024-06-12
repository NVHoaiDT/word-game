import React from "react";

function GuessResult({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((guess) => {
        return <p className="guess" key={crypto.randomUUID()}>{guess}</p>;
      })}
    </div>
  );
}

export default GuessResult;
