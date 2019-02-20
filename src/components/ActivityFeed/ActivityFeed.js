import React, { Component } from 'react'
import Image from "../../img/dude.png"
import Placeholder from "../../img/placeholder.png"
import {Button, Pagination} from 'react-materialize'


export class ActivityFeed extends Component {
  render() {
    const allPosts = [
      {user: 'Dane1', text: 'posted a question' , at: '5 mins ago'},
      {user: 'Dane2', text: 'answered a question' , at: '15 mins ago'},
      {user: 'Dane3', text: 'liked a question' , at: '25 mins ago'},
      {user: 'Dane4', text: 'posted a question' , at: '9 mins ago'},
      {user: 'Dane5', text: 'posted a question' , at: '4 mins ago'},
      {user: 'Dane6', text: 'posted a question' , at: '5 mins ago'},
    ]
    return(
      <React.Fragment>
        <p style={headerStyle}>  <span style={important}> Activity Feed  </span> </p>
        <ul  className="collection">
          {allPosts.map(({ user, text, at }) => (
              <li key={user} className="collection-item avatar">
                  <img className="circle" src={Image} alt={Placeholder} />
                  <p> {user} {text} {at}</p>
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
