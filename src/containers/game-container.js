import React, { Component } from 'react'

import ScoreboardTile from '../components/scoreboard-tile'

class GameContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scores: {
        Red: 0,
        Blue: 0
      },
      comments: []
    }

    this.handleScoreChange = this.handleScoreChange.bind(this)
  }

  handleScoreChange(teamName, scoreChange) {
    let scores = this.state.scores
    scores[teamName] = scores[teamName] + scoreChange
    this.setState({
      scores: scores
    })
  }

  render(){
    console.log("HIGH ORDER COMPONENT RENDER CALLED")
    return (
      <div>
        <ScoreboardTile teamName="Red" score={ this.state.scores.Red } handleScoreChange={this.handleScoreChange} />
        <ScoreboardTile teamName="Blue" score={ this.state.scores.Blue } handleScoreChange={this.handleScoreChange} />
      </div>
    )
  }
}

export default GameContainer