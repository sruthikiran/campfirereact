import React, { Component } from 'react'
import Image from "../../img/dude.png"
import Placeholder from "../../img/placeholder.png"
import {Modal, Button, Icon} from 'react-materialize'
import MyEditor from "../MyEditor"

export class NetworkCard extends Component {
  render() {
    const fullName = this.props.alum.firstName+" "+ this.props.alum.lastName;
    return (
      <div className="card horizontal">
        <div className="card-image cardImage" style={cardImgContainer}>
          <img style={cardImg} src={Image} alt={Placeholder}/>
        </div>
        <div className="card-stacked cardText" style={cardTextContainer}>
          <div style={cardText} className="card-content">
            <span className="card-title"> {this.props.alum.firstName} {this.props.alum.lastName} </span>
            <span> {this.props.alum.role} </span>
            <p>Company : {this.props.alum.company} </p>
            <p>Location: {this.props.alum.location} </p>
            <p>URL : {this.props.alum.url} </p>
          </div>
          <div style={btnRt}>
              <Modal header={fullName} trigger={
                <Button style={custBtn} floating medium lighten-1 className='teal'  icon='email' />}>
                <p>Send a message here!</p>
                <MyEditor />
              </Modal>
          </div>
        </div>
      </div>
    )
  }
}

const btnRt = {
  textAlign: 'right',
  marginTop: '-75px',

}
const custBtn = {
  display: 'inline-block'
}

const cardImg = {
  height: '190px',
  width: '100%',
}

const cardImgContainer = {
  width : '40%'
}

const cardTextContainer = {
  width : '60%'
}

const cardText = {
  display: 'inline-block',
  fontSize : '0.75em',
  height: '100%',
  width: '75%',
  whiteSpace: 'nowrap',
  // overflow: 'hidden',
  // textOverflow: 'ellipsis'
}


export default NetworkCard
