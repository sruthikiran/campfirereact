import React, { Component } from 'react'
import {Navbar, NavItem,Tabs, Tab} from 'react-materialize'
import QuestionOfDay from './QuestionOfDay'
import AllTopics from './AllTopics'
import Thread from './Thread'

export class Forums extends Component {
  render() {
    return (
      <div style={divStyle}>
        <p style={headerStyle}>  <span style={important}> Forum </span> </p>
        <Tabs style={tabStyle} className="indigo">
          <Tab style={itemStyle} title="All Topics"> </Tab>
          <Tab style={itemStyle} title="New Topics" active></Tab>
          <Tab style={itemStyle} title="My Topics"></Tab>
        </Tabs>
        <QuestionOfDay />
        <AllTopics />
        <p>---------------------------------------------</p>
        <Thread />

      </div>
    )
  }
}



const tabStyle={
  marginBottom: '1.5em',
  color: 'white',
  backgroundColor: '#3949ab',
  
}

const itemStyle={
  margin: '1em',
  color: 'white',
  backgroundColor: '#3949ab',
  
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
