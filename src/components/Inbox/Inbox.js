import React, { Component } from 'react'
import {Input} from 'react-materialize'
import MyEditor from "../MyEditor"

export class Inbox extends Component {
  render() {
    return (
      <div>
          <ul className="collapsible popout">
            <li>
              <div className="collapsible-header">
                <div className="left-align"> <p>From: Sruthi Suryadevara</p></div>
                <div className="center-align truncate"><p>Subject: How is the clickable coming along?</p></div>
                <div className="right-align"><p>1/29/2019</p></div>
              </div>
              <div className="collapsible-body white">
                <label>
                  <input style={{color: 'black'}}type="checkbox" className="filled-in"/>
                  <span>Lorem ipsum dolor sit amet.</span>
                </label>
                <div style={editorStyle}>
                  <MyEditor />
                </div>
              </div>
            </li>
            <li>
              <div className="collapsible-header"><i className="material-icons">place</i>Second</div>
              <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
            </li>
            <li>
              <div className="collapsible-header"><i className="material-icons"  onClick={console.log("Alert Alert")}>whatshot</i>Third</div>
              <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
            </li>
          </ul>
      </div>
    )
  }
}

const editorStyle={
  height: '250px'
}

export default Inbox
