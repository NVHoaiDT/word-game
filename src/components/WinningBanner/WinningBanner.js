import React from "react";
import Banner from "../Banner/Banner";

function WinningBanner({ numsOfGuess }) {
  return (
    <Banner
      type={"happy"}
      children={
        <p>
          <strong>Congratulations 🎉!</strong> Got it in
          {" "}
          <strong>
            {numsOfGuess === 1 ? "1 guess" : numsOfGuess + " guesses"}
          </strong>
        </p>
      }
    ></Banner>
  );
}

export default WinningBanner;
