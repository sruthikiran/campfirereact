import React, { Component } from 'react'
import Image from "../../img/dude.png"

export class Profile extends Component {
  render() {
    return (
      <div>
        <img className="circle responsive-img" src={Image}></img>
        <p>Name: Dane Olsen</p>
        <p>Title: Developer</p>
        <p>Location: San Jose, CA</p>
        <p>Email: dane@dane.com</p>
        <p>Joined on: 1/1/2019</p>
        <button>Edit Profile</button>
      </div>
    )
  }
}

export default Profile
