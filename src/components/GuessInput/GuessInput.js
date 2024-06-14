import React from "react";

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [input, setInput] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        handleSubmitGuess(event, input);
        setInput("");
      }}
    >
      <label htmlFor="guess-input">Enter word:</label>
      <input
        disabled = {gameStatus !== "running"}
        id="guess-input"
        value={input}
        pattern="[A-Za-z]{5}"
        title="5 letter only !🤓"
        onChange={(event) => {
          const nextInput = event.target.value.toUpperCase();
          setInput(nextInput);
        }}
      ></input>
    </form>
  );
}

export default GuessInput;
