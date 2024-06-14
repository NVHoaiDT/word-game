import React from "react";

function GuessInput({ guessList, setGuessList }) {
  const [input, setInput] = React.useState("");

  function handleSubmitGuess(event) {
    event.preventDefault();
    const nextGuessList = [...guessList, input];
    setGuessList(nextGuessList);
    setInput("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmitGuess}>
      <label htmlFor="guess-input">Enter word:</label>
      <input
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
