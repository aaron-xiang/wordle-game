# Wordle Game

## Overview

This project is a Wordle clone developed using React.js. It is a browser-based word puzzle game where the player must guess a hidden word within a limited number of attempts. The game provides feedback on each guess, helping the player get closer to the solution.

## Features

- **Word Guessing Game:** Players guess a hidden 5-letter word in 6 attempts.
- **Feedback System:** Letters are highlighted to show correct and incorrect guesses.
  - Green: Correct letter in the correct position.
  - Yellow: Correct letter but in the wrong position.
  - Grey: Incorrect letter.
- **Dynamic Keyboard Input:** An on-screen keyboard highlights the guessed letters based on feedback.
- **Responsive Design:** Works well on mobile and desktop devices.
- **Animations:** Smooth transitions and feedback animations.

## Tech Stack

- **Frontend Framework:** React.js
- **CSS:** Styled using CSS modules / Styled-components
- **State Management:** React hooks (useState, useEffect).

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aaron-xiang/wordle-game.git
   cd wordle-game

2. Install the dependencies:
   ```bash
   npm install

3. Start the development server:
   ```bash
   npm start

The app will run locally on https://localhost:3000

## How to Play

1. The player is given six attempts to guess a 5-letter word.
2. After each guess, the color of the letters will change to show how close the guess was to the actual word.
   - **Green** indicates the correct letter in the correct spot.
   - **Yellow** indicates a correct letter but in the wrong spot.
   - **Grey** indicates the letter is not in the word.
3. Use the on-screen keyboard or your physical keyboard to input guesses.
4. Keep guessing until you find the correct word or use all six attempts.

## Future Improvements

- Implement a daily word feature.
- Add the ability to customize word length and attempts.
- Improve mobile responsiveness.
- Add a score or streak system.
