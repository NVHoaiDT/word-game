import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessSlots from "../GuessSlots/GuessSlots";

// Pick a random word on every pageload.
const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);


  return (
    <>
      <GuessSlots guessList = {guessList} answer = {answer}></GuessSlots>
      <GuessInput guessList = {guessList} setGuessList={setGuessList}></GuessInput>;
    </>
  );
}

export default Game;
