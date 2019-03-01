import React, { Component } from 'react'
import {Navbar, NavItem,Tabs, Tab} from 'react-materialize'
import QuestionOfDay from './QuestionOfDay'
import AllTopics from './AllTopics'

export class Forums extends Component {
  render() {
    return (
      <div style={divStyle}>
        <p style={headerStyle}>  <span style={important}> Forum </span> </p>
        <Tabs style={tabStyle} className="tab-demo z-depth-1 indigo">
          <Tab style={itemStyle} title="All Topics"> </Tab>
          <Tab style={itemStyle} title="New Topics" active></Tab>
          <Tab style={itemStyle} title="My Topics"></Tab>
        </Tabs>
        <QuestionOfDay />
        <AllTopics />


      </div>
    )
  }
}



const tabStyle={
  marginBottom: '1.5em',
  
}

const itemStyle={
  margin: '1em',
  color: 'white',
}

const divStyle ={
  marginTop: '1em',
}

const headerStyle = {
  margin : '1em'
}

const important = {
  fontSize :  '1.5em',
  fontWeight : 'bold',
}

export default Forums
