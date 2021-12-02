// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiCardDetails, clickEmoji} = props
  const {emojiUrl, emojiName, id} = emojiCardDetails

  const onClickEmojiCard = () => {
    clickEmoji(id)
  }
  return (
    <li className="list-container">
      <button className="btn" onClick={onClickEmojiCard} type="button">
        <img className="img-icon" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
