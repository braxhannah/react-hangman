import React, { Component } from 'react'
import './Keyboard.css'

class Keyboard extends Component {
  render () {
    return (
      <div className='Keyboard'>
        <h1>IM THE BOARD</h1>
        <Alphabet />

      </div>
    )
  }
}

class Alphabet extends Component {
  render () {
    return (
      <div>
        <Letter character="a"/>
        <Letter character="b"/>
        <Letter character="c"/>
        <Letter character="d"/>
        <Letter character="e"/>
        <Letter character="f"/>
        <Letter character="g"/>
        <Letter character="h"/>
        <Letter character="i"/>
        <Letter character="j"/>
        <Letter character="k"/>
        <Letter character="l"/>
        <Letter character="m"/>
        <Letter character="n"/>
        <Letter character="o"/>
        <Letter character="p"/>
        <Letter character="q"/>
        <Letter character="r"/>
        <Letter character="s"/>
        <Letter character="t"/>
        <Letter character="u"/>
        <Letter character="v"/>
        <Letter character="w"/>
        <Letter character="x"/>
        <Letter character="y"/>
        <Letter character="z"/>
      </div>
    )
  }
}

class Letter extends Component {
  render () {
    return <button>{this.props.character}</button>;
  }
}
 export default Keyboard
