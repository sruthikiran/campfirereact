import React, { Component } from 'react'
import ActivityPost from './ActivityPost'


export class ActivityFeed extends Component {
  render() {
    const allPosts = [
      {user: 'Dane1', text: 'posted a question' , at: '5 mins ago'},
      {user: 'Dane2', text: 'posted a question' , at: '15 mins ago'},
      {user: 'Dane3', text: 'posted a question' , at: '25 mins ago'},
      {user: 'Dane4', text: 'posted a question' , at: '9 mins ago'},
      {user: 'Dane5', text: 'posted a question' , at: '4 mins ago'},
    ]
    return allPosts.map((post) => (
      <ul  class="collection">
        <ActivityPost post={post}  />
      </ul>
      ))
  }
}

export default ActivityFeed
