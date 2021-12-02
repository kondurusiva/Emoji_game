// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, isGameInProgress} = props

  return (
    <nav className="nav-container">
      <div className="navbar-container">
        <div className="logo-and-titleContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="emoji-logo"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="scores-container">
            <p className="scores">Score:{score}</p>
            <p className="scores">Top Score:{topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
