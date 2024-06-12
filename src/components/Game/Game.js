import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResult from "../GuessResult/GuessResult";
import GuessSlots from "../GuessSlots/GuessSlots";

// Pick a random word on every pageload.
const answer = sample(WORDS);
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);


  return (
    <>
      <GuessSlots guessList = {guessList}></GuessSlots>
      {/* <GuessResult guessList= {guessList}></GuessResult> */}
      <GuessInput guessList = {guessList} setGuessList={setGuessList}></GuessInput>;
    </>
  );
}

export default Game;
