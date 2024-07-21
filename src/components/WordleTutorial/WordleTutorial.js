import React from "react";
import styles from "./WordleTutorial.module.css"
function WordleTutorial() {
  
  return (
    <>
      <h2 className={styles.title}>How to play <span className={styles.gradient}>Wordle</span></h2>
      <p>
        It works like this: When you visit the site, you're greeted by 6-long
        grid of empty, white boxes. Each box can hold only one letter, and so
        you guess at the {" "} <span className={`${styles.tag} ${styles.success}`}>answer</span> {" "} by typing in a
        five-letter word and pressing 'Enter'.
      </p>
      <p>
        There aren't any clues up front, so first five-letter word will do as an
        initial guess. That's where the game of Wordle really starts. When you
        send a guess along, the color of each letter's box changes.
      </p>
      <ul className={styles.list}>
        <li>If it turns <span className={`${styles.tag} ${styles.success}`}>green</span>, that letter is in the answer and you've placed it in the right spot.</li>
        <li>If it turns <span className={`${styles.tag} ${styles.missplace}`}>yellow</span>, the letter is in the answer but you have it in the wrong position.</li>
        <li>If it turns <span className={`${styles.tag} ${styles.wrong}`}>gray</span>, it means the letter isn't in the answer at all.</li>
      </ul>
    </>
  );
}

export default WordleTutorial;

