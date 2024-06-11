import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  console.log(guess);
  return <GuessInput guess={guess} setGuess={setGuess}></GuessInput>;
}

export default Game;
