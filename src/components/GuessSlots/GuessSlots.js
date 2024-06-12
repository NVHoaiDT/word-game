import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessSlots({ guessList }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <p className="guess" key={crypto.randomUUID()}>
          {guessList[index] !== undefined
            ? guessList[index].split("").map((character) => (
                <span className="cell" key={crypto.randomUUID()}>
                  {character}
                </span>
              ))
            : range(5).map((index) => <span className="cell" key={crypto.randomUUID()}></span>)}
        </p>
      ))}
    </div>
  );
}

export default GuessSlots;
