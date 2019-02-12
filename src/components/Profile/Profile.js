import React, { Component } from 'react'
import Image from "../../img/dude.png"
import {Modal, Button, Icon} from 'react-materialize'

export class Profile extends Component {
  render() {
    return (
      <div>
        <div className="row valign-wrapper">
            <div className="col s3">
              <img className="circle responsive-img" src={Image} />
            </div>
            <div className="col s8">

            </div>

        </div>
        <div className="row valign-wrapper">
            <div className="col s4" style={liststyle}>  
              <li><span> Name: </span> Dane Olsen </li>
              <li><span> Title: </span> Developer</li>
              <li><span> Company: </span>  Nvidia</li>
              <li> <span> Location: </span>  San Jose, CA</li>
              <li> <span> Email: </span> dane@dane.com</li>
              <li> <span> URL: </span> www.github.com/dane</li>
              <li> <span>Joined on: </span> 1/1/2019</li>
              <Button className="indigo">Edit Profile<Icon right>edit</Icon></Button>
             
            </div>
            <div className="col s7">

            </div>
          </div>
        
      </div>
    )
  }
}

const liststyle = {
  listStyle : 'none'
}

export default Profile
