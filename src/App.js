import React, { Component } from 'react'
import Word from './Word.js'
import './App.css'
import Keyboard from './Keyboard.js'
class App extends Component {

  constructor () {
    super()
    this.state = {
      solution: 'GITHUB',
      used: [],
      matched: [],
      count: 0,
      hangmanImage: ['../images/hangmanBase.gif','../images/hangmanHead.gif','../images/hangmanBody.gif','../images/hangmanLeftArm.gif','../images/hangmanRightArm.gif','../images/hangmanLeftLeg.gif','../images/hangmanRightLeg.gif']
    }
  }

  onPlay=(character) => {
    for (let i = 0; i < this.state.solution.length; i++) {
      if( character === this.state.solution[i]) {
        this.state.matched.push(character)
        }
          if (this.state.matched.length===this.state.solution.length){
            alert('You Win')
            this.setState({
              used:[],
              matched: []
          })
          this.refresh()
        }
        this.setState({count: this.state.count + 1})
      }
      console.log(this.state.used.length)
    if (this.state.used.length >= 6){
      alert('You Lose')
      this.setState({
        used:[],
        matched: []
      })
      this.refresh()
    }


    this.state.used.push(character)
    this.setState({
      used: this.state.used
    })
    console.log(this.state.used)
  }
refresh= () => {
  window.location.reload()
}

  render() {
    // let foo = this.state.used.length ? this.state.used.length - this.state.matched.length : 0
    return <div className='App'>
      <h1>Hangman!</h1>
      <img src= {this.state.hangmanImage[this.state.count]} alt='hangman' />
      <Word solution= {this.state.solution} used={this.state.used} />
      <Keyboard onPlay= {this.onPlay}/>
      <button onClick={this.refresh} > ResetGame </button>
    </div>
  }
}

export default App
