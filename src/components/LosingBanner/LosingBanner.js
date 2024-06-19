import React from "react";
import Banner from "../Banner/Banner";

function LosingBanner({ answer }) {
  return (
    <Banner
      type={"sad"}
      children={
        <p>
          Keep trying, you'll get it next time 💪! the correct answer is <strong>{answer}</strong>
        </p>
      }
    ></Banner>
  );
}

export default LosingBanner;
