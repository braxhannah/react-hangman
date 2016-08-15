import React, { Component } from 'react'
import Word from './Word.js'
import './App.css'
import Keyboard from './Keyboard.js'
class App extends Component {

  constructor () {
    super()
    this.state = {
      solution: 'BALLIN',
      used: [],
      matched: []
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
        }

      }
      console.log(this.state.used.length)
    if (this.state.used.length >= 6){
      alert('You Lose')
      this.setState({
        used:[],
        matched: []
      })
    }


    this.state.used.push(character)
    this.setState({
      used: this.state.used
    })
    console.log(this.state.used)
  }

  render() {
    return <div className='App'>
      <h1>Hangman!</h1>
      <Word solution={this.state.solution} used={this.state.used} />
      <Keyboard onPlay={this.onPlay}/>
    </div>
  }
}

export default App
