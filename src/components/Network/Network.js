import React, { Component } from 'react'
import NetworkLeft from './NetworkLeft'
import NetworkRight from './NetworkRight'

export class Network extends Component {
  render() {
    return (
      <div className="row valign-wrapper">
          <div className="col s2" style={leftstyle}>
            <NetworkLeft />
          </div>
          <div className="col s9" style={rightstyle}>
            <NetworkRight />
          </div>
      </div>
    )
  }
}


const leftstyle = {
  listStyle : 'none',
  marginRight: '2em',
  outline : '2px solid white',
  marginTop : '2em'
  // textAlign : 'center'
}

const rightstyle = {
  outline : '2px solid white',
  marginTop : '2em'
  // textAlign : 'center'
}

export default Network
