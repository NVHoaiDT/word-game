import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
  return (
    <p className="guess">
      {value !== undefined
        ? value.split("").map((character) => (
            <span className="cell" key={crypto.randomUUID()}>
              {character}
            </span>
          ))
        : range(5).map((index) => (
            <span className="cell" key={crypto.randomUUID()}></span>
          ))}
    </p>
  );
}

export default Guess;
