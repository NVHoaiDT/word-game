import React from "react";
import styles from "./Keyboard.module.css";
 
const ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

//unguess, miss, succ, fail
function getStatusByLetter(validatedGuesses) {
  const statusObj = {};
  const allLettersStatus = validatedGuesses.flat();

  allLettersStatus.forEach(({ letter, status }) => {
    const currentStatus = statusObj[letter];

    if (currentStatus === undefined) {
      statusObj[letter] = status;
      return;
    }

    const STATUS_RANKS = {
      correct: 1,
      misplaced: 2,
      incorrect: 3,
    };

    const currentStatusRank = STATUS_RANKS[currentStatus];
    const newStatusRank = STATUS_RANKS[status];

    if (newStatusRank < currentStatusRank) {
      statusObj[letter] = status;
    }
  });

  return statusObj;
}


function Keyboard({validatedGuesses }) {
  const lettersStatus = getStatusByLetter(validatedGuesses);

  return (
    <div className={styles.keyboard}>
      {ROWS.map((row, index) => {
        return (
          <div className={styles.row} key={index}>
            {row.map((letter, letterIndex) => {
              const letterStatus = lettersStatus[letter];
              console.log(letterStatus);
              return (
                <span className={`${styles.letter} ${styles[letterStatus]}`} key={letterIndex}>
                  {letter}
                </span>
              );
            })} 
          </div>
        );
      })}
    </div>
  );
}

export default Keyboard;
