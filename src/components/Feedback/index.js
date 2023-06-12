// Write your React code here.
import './index.css'

import {Component} from 'react'

class Feedback extends Component {
  state = {displayChange: true}

  onChangeDis = () => {
    this.setState({
      displayChange: false,
    })
  }

  render() {
    const {displayChange} = this.state

    const {resources} = this.props

    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="app-con">
        {displayChange ? (
          <div className="mini-emoji-con">
            <h1 className="mini-head">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="list-con">
              {emojis.map(eachItem => (
                <li key={eachItem.id} className="li-con">
                  <button
                    type="button"
                    className="button"
                    onClick={this.onChangeDis}
                  >
                    <img
                      src={eachItem.imageUrl}
                      alt={eachItem.name}
                      className="img"
                    />
                    <span className="spanEl">{eachItem.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="wish-con">
            <img src={loveEmojiUrl} alt="love emoji" className="img1" />
            <h1 className="thanq">Thank You!</h1>
            <p className="des">
              We use your feedback to improve our customer support performance
            </p>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
