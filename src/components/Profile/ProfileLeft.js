import React, { Component } from 'react'
import Image from "../../img/dude.png"
import {Modal, Button, Icon} from 'react-materialize'

export class ProfileLeft extends Component {
  render() {
    return (
        <React.Fragment>
          <img className="square responsive-img" style={imgStyle} src={Image} />
          <li><span style={important}> Dane Olsen  </span> </li>
          <li><span > Front-End Developer </span> </li>

          <Button className="indigo" style={buttonStyle}>Edit Profile<Icon right>edit</Icon></Button>

          <li> <i class="fas fa-map-marker-alt"> </i>  San Jose, CA</li>
          <li> <i class="far fa-envelope"></i> dane@dane.com</li>
          <li> <i class="fas fa-link"></i> www.github.com/dane</li>
          <li> <i class="far fa-clock"></i> Active since 1/1/2019</li>
        </React.Fragment>

    )
  }
}

const imgStyle = {
  marginTop : '2em',
  borderRadius : '5px'
}

const buttonStyle = {
  marginTop : '2em',
  marginBottom : '2em'
}

const important = {
  fontSize :  '1.5em',
  fontWeight : 'bold',
}

export default ProfileLeft
