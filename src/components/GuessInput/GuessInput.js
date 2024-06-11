import React from "react";

function GuessInput({ guess, setGuess }) {
  const [input, setInput] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        setGuess(input);
        setInput("");
      }}
    >
      <label htmlFor="guess-input">Enter word:</label>
      <input
        id="guess-input"
        value={input}
        pattern="[A-Za-z]{5}"
        title="5 letter only !"
        onChange={(event) => {
          setInput(event.target.value.toUpperCase());
        }}
      ></input>
    </form>
  );
}

export default GuessInput;
