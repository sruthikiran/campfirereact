import React, { Component } from 'react'
import Image from "../../img/dude.png"
import Placeholder from "../../img/placeholder.png"
import {Button, Pagination, Chip} from 'react-materialize'


export class ActivityFeed extends Component {
  render() {
    const allPosts = [
      {user: 'Dane2', text: 'upvoted' ,topic: 'tuples in Python', at: '2 mins ago'},
      {user: 'Sruthi', text: 'posted',topic: 'tuples in Python', at : '5 mins ago'},
      {user: 'Dane3', text: 'posted' ,topic: 'Four Zero Four',  at: '25 mins ago'},
      {user: 'Maxime Pollet', text: 'and 1 other started following you',topic: null, at: '3 days ago'},
      {user: 'Dane5', text: 'and 5 others upvoted' ,topic: 'Hacking UI', at: '5 days ago'},
      {user: 'Dane6', text: 'posted' , topic : 'Few things every developer needs to know about', at: '6 days ago'},
    ]
    return(
      <React.Fragment>
        <p style={headerStyle}>  <span style={important}> Activity Feed  </span> </p>
        <ul  className="collection">
          {allPosts.map(({ user, text, topic, at }) => (
              <li key={user} className="collection-item">
                  <li> {user} {text} <span style={highlightTopic}> {topic}  </span>  <img style={imageStyle} src={Image} alt={Placeholder} /> </li>
                  <li style={timeStyle}> {at} </li>
              </li>
          ))}
        </ul>
        <div style={footerStyle}>
          <Pagination items={10} activePage={2} maxButtons={8} />
        </div>
      </React.Fragment>
    )
  }
}

export default ActivityFeed

const headerStyle = {
  margin : '1em'
}

const footerStyle = {
  margin : '2em',
  textAlign: 'center'
}

const important = {
  fontSize :  '1.5em',
  fontWeight : 'bold',
}

const highlightTopic = {
  fontSize :  '1em',
  color : 'blue',
  fontStyle : 'italic',
}

const timeStyle = {
  fontSize :  '0.75em',
  color : 'green',
}

const imageStyle = {
  width : '2em',
  height : '2em',
  borderRadius : '1.5em',
  float: 'right'
}
