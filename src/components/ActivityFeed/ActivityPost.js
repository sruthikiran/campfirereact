import React, { Component } from 'react'
import Image from "../../img/dude.png"
import Placeholder from "../../img/placeholder.png"

export class ActivityPost extends Component {
  render() {
    return (
    <li style={{paddingTop:'2.5%'}} className="collection-item avatar">
      {/* <div className="row valign-wrapper"> */}
        <img className="circle" src={Image} alt={Placeholder} />
        {/* <i class="material-icons circle">person</i> */}
        <p>{this.props.post.user} {this.props.post.text} {this.props.post.at}</p>
      {/* </div> */}
    </li>
    )
  }
}

export default ActivityPost
