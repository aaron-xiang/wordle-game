import React, { useContext } from 'react'
import { AppContext } from '../App'

function GameOver() {
  const { gameOver, setGameOver, correctWord, currAttempt } = useContext(AppContext)
  return (
    <div className='gameOver'>
      <h3>{gameOver.gussedWord ? "You Win" : "You Lost"}</h3>
      <h1>Correct word: {correctWord}</h1>
      {gameOver.gussedWord && (
        <h3>You guessed the word in {currAttempt.attempt} attempts</h3>
      )}
    </div>
  )
}

export default GameOver