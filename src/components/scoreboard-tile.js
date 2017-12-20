import React from 'react'

class ScoreboardTile extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    let scoreAdjustment
    if(event.currentTarget.innerText === '+') {
      scoreAdjustment = 1
    }
    else {
      scoreAdjustment = -1
    }
    this.props.handleScoreChange(this.props.teamName, scoreAdjustment)
  }

  render(){
    console.log('TILE RENDER CALLED')
    return (
      <div>
        <h2>
          {this.props.teamName}
        </h2>
        <h3>
          <button onClick={this.handleClick}>-</button>
          <h3>{ this.props.score }</h3>
          <button onClick={this.handleClick}>+</button>
        </h3>
      </div>
    )
  }
}

export default ScoreboardTile