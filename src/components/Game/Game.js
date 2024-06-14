import React from "react";

import GuessInput from "../GuessInput/GuessInput";
import GuessSlots from "../GuessSlots/GuessSlots";
import WinningBanner from "../WinningBanner/WinningBanner";
import LosingBanner from "../LosingBanner/LosingBanner";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const answer = sample(WORDS);
console.info({ answer });

function Game() {
  //winning, running, losing
  const [gameStatus, setGameStatus] = React.useState("running");
  const [guessList, setGuessList] = React.useState([]);

  function handleSubmitGuess(event, input) {
    event.preventDefault();
    const nextGuessList = [...guessList, input];  
    setGuessList(nextGuessList);

    if (input === answer) {
      setGameStatus("winning");
    } else if (guessList.length >= NUM_OF_GUESSES_ALLOWED - 1) {
      setGameStatus("losing");
    } else {
      setGameStatus("running");
    }
  }

  return (
    <>
      <GuessSlots guessList={guessList} answer={answer}></GuessSlots>
      <GuessInput handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus}></GuessInput>;
      {gameStatus === "winning" && (
        <WinningBanner numsOfGuess={guessList.length}></WinningBanner>
      )}
      {gameStatus === "losing" && (
        <LosingBanner answer={answer}></LosingBanner>
      )}
    </>
  );
}

export default Game;
