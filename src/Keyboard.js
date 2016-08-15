import React, { Component } from 'react'
import './Keyboard.css'

class Keyboard extends Component {
  render () {
    return (
      <div className='Keyboard'>
        <Alphabet onPlay={this.props.onPlay} />

      </div>
    )
  }
}

class Alphabet extends Component {
  render () {
    return (
      <div>
        <Letter onPlay={this.props.onPlay} character="A"/>
        <Letter onPlay={this.props.onPlay} character="B"/>
        <Letter onPlay={this.props.onPlay} character="C"/>
        <Letter onPlay={this.props.onPlay} character="D"/>
        <Letter onPlay={this.props.onPlay} character="E"/>
        <Letter onPlay={this.props.onPlay} character="F"/>
        <Letter onPlay={this.props.onPlay} character="G"/>
        <Letter onPlay={this.props.onPlay} character="H"/>
        <Letter onPlay={this.props.onPlay} character="I"/>
        <Letter onPlay={this.props.onPlay} character="J"/>
        <Letter onPlay={this.props.onPlay} character="K"/>
        <Letter onPlay={this.props.onPlay} character="L"/>
        <Letter onPlay={this.props.onPlay} character="M"/>
        <Letter onPlay={this.props.onPlay} character="N"/>
        <Letter onPlay={this.props.onPlay} character="O"/>
        <Letter onPlay={this.props.onPlay} character="P"/>
        <Letter onPlay={this.props.onPlay} character="Q"/>
        <Letter onPlay={this.props.onPlay} character="R"/>
        <Letter onPlay={this.props.onPlay} character="S"/>
        <Letter onPlay={this.props.onPlay} character="T"/>
        <Letter onPlay={this.props.onPlay} character="U"/>
        <Letter onPlay={this.props.onPlay} character="V"/>
        <Letter onPlay={this.props.onPlay} character="W"/>
        <Letter onPlay={this.props.onPlay} character="X"/>
        <Letter onPlay={this.props.onPlay} character="Y"/>
        <Letter onPlay={this.props.onPlay} character="Z"/>
      </div>
    )
  }
}

class Letter extends Component {
  constructor () {
    super()
    this.state = {
      clicked: false

    }
  }
 handleClick = () => {
  this.props.onPlay(this.props.character)
  this.setState({
    clicked: true
  })

 }

 render () {

   return <button disabled= {this.state.clicked} onClick={this.handleClick}>{this.props.character}</button>;
 }
}

 export default Keyboard
