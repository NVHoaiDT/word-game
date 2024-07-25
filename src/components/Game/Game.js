import React from "react";

import GuessInput from "../GuessInput/GuessInput";
import GuessSlots from "../GuessSlots/GuessSlots";
import WinningBanner from "../WinningBanner/WinningBanner";
import LosingBanner from "../LosingBanner/LosingBanner";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import RestartButton from "../RestartButton/RestartButton";
import Keyboard from "../Keyboard/Keyboard";
import { checkGuess } from "../../game-helpers";

let answer = sample(WORDS);
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
  function handleRestart() {
    setGuessList([]);
    setGameStatus("running");
    answer = sample(WORDS);
    console.info({ answer });
  }

  const validatedGuesses = guessList.map((guess) =>
    checkGuess(guess, answer)
  );

  return (
    <>
      <GuessSlots guessList={guessList} answer={answer}></GuessSlots>
      <GuessInput handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus}></GuessInput>
      <Keyboard validatedGuesses={validatedGuesses}></Keyboard>
      {gameStatus === "winning" && (
        <WinningBanner numsOfGuess={guessList.length}></WinningBanner>
      )}
      {gameStatus === "losing" && (
        <LosingBanner answer={answer}></LosingBanner>
      )}
      <RestartButton handleRestart={handleRestart}></RestartButton>
    </>
  );
}

export default Game;
