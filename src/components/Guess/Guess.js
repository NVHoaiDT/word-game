import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const guessResult = checkGuess(value, answer);
  return (
    <p className="guess">
      {value !== undefined
        ? guessResult.map(({ letter, status }) => (
            <span className={`cell back ${status}`} key={crypto.randomUUID()}>
              {letter}
            </span>
          ))
        : range(5).map((index) => (
            <span className="cell back" key={crypto.randomUUID()}></span>
          ))}
    </p>
  );
}

export default Guess;
