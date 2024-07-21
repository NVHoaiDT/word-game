import React from "react";
import Game from "../Game";
import Header from "../Header";
import Modal from "../Modal/Modal";
import useToggle from "../../hook/useToggle";
import WordleTutorial from "../WordleTutorial/WordleTutorial";

function App() {
  const [isModelOpen, toggleModelOpen] = useToggle(true);
  return (
    <>
      {(isModelOpen) && (
        <Modal title="Wordle tutorial" handleDismiss={toggleModelOpen}>
          <WordleTutorial></WordleTutorial>
        </Modal>
      )}
      <div className="wrapper">
        <Header />

        <div className="game-wrapper">
          {" "}
          <Game />
        </div>
      </div>
    </>
  );
}

export default App;
