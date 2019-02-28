import React, { Component } from 'react'

export class QuestionOfDay extends Component {
  render() {
    return (
      <a href="#">
      <div style={divStyle}>
        <h3>Question of the Day</h3>
        <p style={qStyle}>How much wood could a woodchuck chuck if a woodchuck could chuck wood?</p>
         <p style={pStyle}>Come in and join the discussion!</p> 
      </div>
      </a>
      
    )
  }
}

const qStyle = {
  fontSize:'1.2em'
}
const pStyle = {
  fontSize:'0.75em',
  // float : 'right',
  color : 'green'
}

const divStyle={
  border: '2px black solid',
  marginTop:'1em',
  color: 'black',
}

export default QuestionOfDay
