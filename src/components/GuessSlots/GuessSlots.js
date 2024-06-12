import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";

function GuessSlots({ guessList }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess value={guessList[index]}  key={crypto.randomUUID()}></Guess>
      ))}
    </div>
  );
}

export default GuessSlots;
