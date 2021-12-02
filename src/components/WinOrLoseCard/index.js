// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, isWon, onClickPlayAgain} = props
  const winOrLose = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'score'

  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="card-container">
      <div className="inside-card">
        <h1 className="heading">{winOrLose}</h1>
        <p className="scoreLabel">{scoreLabel}</p>
        <p className="score">{score}/12</p>
        <button className="button" type="button" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
      <div className="image-section">
        <img className="image" src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
