# A tiny react-based project.

You can play this word-game here: [HDT-Wordle](https://nvhoaidt.github.io/word-game/)

## How to play wordle ?

It works like this: When you visit the site, you're greeted by 6-long grid of empty, white boxes. Each box can hold only one letter, and so you guess at the `answer` by typing in a five-letter word and pressing 'Enter'.

There aren't any clues up front, so first five-letter word will do as an initial guess. That's where the game of Wordle really starts. When you send a guess along, the color of each letter's box changes.

- If it turns <span style="color:#37b24d">_green_</span>, that letter is in the `answer` and you've placed it in the right spot.

- If it turns <span style="color:#ffec99">_yellow_</span>, the letter is in the `answer` but you have it in the wrong position.

- If it turns <span style="color:#868e96">_gray_</span>, it means the letter isn't in the `answer` at all.

Enjoy the game!

## Installation

To run the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/username/word-game.git

   ```

2. Navigate to the project directory:
   ```bash
   cd word-game
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

> [!NOTE]
> This project was originally built with Parcel (an older React client-side bundler), and some parts of the code lacked maintainability. I have now migrated it to Next.js: HDT-Wordle.
